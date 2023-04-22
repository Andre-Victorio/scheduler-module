"use strict";
const StudentAccount = require("../model-components/studentModelComponent");

const findByEmail = (req, res) => {
  StudentAccount.findByEmail(req, function (err, account) {
    if (err) {
      res.send(err);
    }
    if (Object.keys(account).length !== 0) {
      res(409);
    } else {
      res(200);
    }
  });
};

exports.create = function (req, res) {
  const newAccount = new StudentAccount(req.body);
  //handles null error
  // console.log(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({error: true, message: "Please provide all required field"});
  } else {
    findByEmail(newAccount["email"], function (status) {
      if (status === 200) {
        StudentAccount.createAccount(newAccount, function (err, account) {
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
