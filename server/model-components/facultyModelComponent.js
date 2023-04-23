"use strict";
var dbConn = require("../config/db.config");

class Faculty {
  constructor(account) {
    this.name = account.name;
    this.email = account.email;
    this.password = 1234; //Default Password
    this.id = account.id;
    this.role = account.role;
    this.userType = account.userType;
  }
  //create account
  static createAccount(newAccount, result) {
    dbConn.query("INSERT INTO Faculty set ?", newAccount, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  }
  // //query a single entry
  // static findById(accountId, result) {
  //   dbConn.query(
  //     "SELECT * FROM accounts WHERE accountId=?",
  //     accountId,
  //     function (err, res) {
  //       if (err) {
  //         console.log(err, null);
  //       } else {
  //         result(null, res);
  //       }
  //     }
  //   );
  // }

  static findByEmail(email, result) {
    dbConn.query(
      "SELECT * FROM Faculty WHERE email=?",
      email,
      function (err, res) {
        if (err) {
          console.log(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }

  static retrieveAllAccounts(result) {
    dbConn.query("SELECT * FROM Faculty WHERE isDeleted = 0", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("posts: ", res);
        result(null, res);
      }
    });
  }
  // static findByEmailAndPassword(email, password, result) {
  //   const query = "SELECT * FROM accounts WHERE email = ? AND password = ?";
  //   dbConn.query(query, [email, password], function (err, res) {
  //     if (err) {
  //       console.log(err);
  //       result(err, null);
  //     } else {
  //       result(
  //         null,
  //         res.length,
  //         Object.values(res)[0]?.accountId,
  //         Object.values(res)[0]?.status
  //       );
  //     }
  //   });
  // }

  static disableAccount(accountId, result) {
    const query = "UPDATE Faculty SET isDeleted = 1 WHERE FacultyId = ?";
    dbConn.query(query, accountId, (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        console.log(res);
        result(null, res);
      }
    });
  }
}

module.exports = Faculty;
