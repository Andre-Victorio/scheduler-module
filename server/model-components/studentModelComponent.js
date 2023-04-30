"use strict";
var dbConn = require("../config/db.config");

class Student {
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
    dbConn.query("INSERT INTO Student set ?", newAccount, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    });
  }

  static findByEmail(email, result) {
    dbConn.query(
      "SELECT * FROM Student WHERE email=?",
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
    dbConn.query(
      "SELECT * FROM Student WHERE isDeleted = 0",
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          console.log("posts: ", res);
          result(null, res);
        }
      }
    );
  }

  static findByEmailAndPassword(email, password, result) {
    const query =
      "SELECT * FROM Student WHERE email = ? AND password = ? AND isDeleted = 0";
    dbConn.query(query, [email, password], function (err, res) {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(
          null,
          res.length,
          Object.values(res)[0]?.StudentId,
          Object.values(res)[0]?.UserType,
          Object.values(res)[0]?.Name,
          Object.values(res)[0]?.Role
        );
      }
    });
  }

  static disableAccount(accountId, result) {
    const query = "UPDATE Student SET isDeleted = 1 WHERE StudentId = ?";
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

  static updateAccount(accountId, updatedAccount, result) {
    const query = "UPDATE Student SET ? WHERE StudentId = ?";
    dbConn.query(query, [updatedAccount, accountId], (err, res) => {
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

module.exports = Student;
