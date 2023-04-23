"use strict";
const StudentAccount = require("../model-components/studentModelComponent");
const FacultyAccount = require("../model-components/facultyModelComponent");
const findByEmail = (req, res) => {
  simultaneouslyQueryEmail(req, function (status) {
    res(status);
  });
};

//Attemps to find email first on student table then goes to faculty table
const simultaneouslyQueryEmail = (req, res) => {
  StudentAccount.findByEmail(req, function (err, account) {
    if (err) {
      res.send(err);
    }
    if (Object.keys(account).length !== 0) {
      res(409);
    } else {
      FacultyAccount.findByEmail(req, function (err, account) {
        if (err) {
          res.send(err);
        }
        if (Object.keys(account).length !== 0) {
          res(409);
        } else {
          res(200);
        }
      });
    }
  });
};

exports.create = function (req, res) {
  var x = req.body["userType"] === "student" ? StudentAccount : FacultyAccount;
  const newAccount = new x(req.body);
  //handles null error
  // console.log(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({error: true, message: "Please provide all required field"});
  } else {
    findByEmail(newAccount["email"], function (status) {
      if (status === 200) {
        x.createAccount(newAccount, function (err, account) {
          if (err) {
            res.send(err);
          }
          res.json({
            error: false,
            status: 200,
            message: "Account added successfully! Please log in.",
            data: account,
          });
        });
      } else {
        res.status(409).send({error: true, message: "Email already exists."});
      }
    });
  }
};

exports.retrieveAccounts = function(req,res) {
  var x = req.body["userType"] === "student" ? StudentAccount : FacultyAccount;
  console.log(req.body);
  x.retrieveAllAccounts(function(err,post){
      if (err){
          res.send(err);
      }
      console.log('res',post);
      res.send({status:200,data: post});
  });
}

// exports.findById = function (req, res) {
//   Account.findById(req.params.accountId, function (err, account) {
//     if (err) {
//       res.send(err);
//     }
//     if (Object.keys(account).length !== 0) {
//       res.json({ status: 200, data: account });
//     } else {
//       res.json({ status: 404 });
//     }
//   });
// };

// exports.findByEmailAndPassword = function (req, res) {
//   const newAccount = new Account(req.body);
//   Account.findByEmailAndPassword(
//     newAccount["email"],
//     newAccount["password"],
//     function (err, count, accountId, accountStatus) {
//       if (err) {
//         res.status(401).json({ success: false });
//       } else if (count > 0) {
//         res.status(200).json({ success: true, accountId, accountStatus });
//       } else {
//         res.status(401).json({ success: false });
//       }
//     }
//   );
// };

// exports.disableAccount = (req, res) => {
//   console.log(req.body);
//   Account.disableAccount(req.body.userId, req.body.status, (err, data) => {
//     if (err) {
//       res.json({ err });
//     } else {
//       res.json({ status: 200, data });
//     }
//   });
// };
