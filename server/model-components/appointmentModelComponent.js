"use strict";
var dbConn = require("../config/db.config");

const PriorityQueue = require("../utility/priorityQueue");
const priorityQueue = new PriorityQueue();
dbConn.query(
  "SELECT PriorityNumber FROM appointment ORDER BY PriorityNumber",
  (err, results) => {
    if (err) {
      console.error("Error loading appointments from database:", err);
      return;
    }
    console.log(`Loaded ${results.length} appointments from database.`);
    results.forEach((result) => {
      console.log(result);
      if (result.length !== 0) priorityQueue.setQueue(result.PriorityNumber);
    });
  }
);
class Appointment {
  constructor(appointment) {
    this.scheduleId = appointment.scheduleId;
    this.studentId = appointment.studentId;
    this.description = appointment.description;
    this.category = appointment.category;
    this.status = 0;
  }
  //create account
  static createAppointment(newAppointment, result) {
    var priorityNumber = priorityQueue.enqueue();
    // console.log(priorityNumber);
    dbConn.query(
      "INSERT INTO Appointment set ?, priorityNumber = ?",
      [newAppointment, priorityNumber],
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

module.exports = Appointment;
