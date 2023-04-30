"use strict";
var dbConn = require("../config/db.config");

class Admin {

  static findByEmailAndPassword(email, password, result) {
    const query =
      "SELECT * FROM Administrator WHERE email = ? AND password = ? AND isDeleted = 0";
    dbConn.query(query, [email, password], function (err, res) {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(
          null,
          res.length,
          Object.values(res)[0]?.FacultyId,
          Object.values(res)[0]?.UserType,
          Object.values(res)[0]?.Name,
          Object.values(res)[0]?.Role
        );
      }
    });
  }
}

module.exports = Admin;
