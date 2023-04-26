"use strict";
var dbConn = require("../config/db.config");

class Schedule {
  constructor(schedule) {
    this.facultyId = schedule.facultyId;
    this.date = schedule.date;
    this.startTime = schedule.startTime;
    this.endTime = schedule.endTime;
    this.location = schedule.location;
  }
  static addSchedule(newSchedule, result) {
    dbConn.query(
      "INSERT INTO Schedule set ?",
      newSchedule,
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res.insertId);
        }
      }
    );
  }
}

module.exports = Schedule;
