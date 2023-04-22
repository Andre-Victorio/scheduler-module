"use strict";
const mysql = require("mysql2");
//local mysql db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "scheduler-module-db",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
  console.log(err);
});
module.exports = dbConn;
