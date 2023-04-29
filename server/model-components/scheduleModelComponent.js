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
  static retrieveSchedules(accountId, result) {
    dbConn.query(
      "SELECT * FROM Schedule WHERE FacultyId = ?",
      accountId,
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
  static deleteSchedule(scheduleId, result) {
    console.log(scheduleId);
    dbConn.query(
      "DELETE FROM Schedule WHERE ScheduleId = ?",
      scheduleId,
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
}

module.exports = Schedule;
