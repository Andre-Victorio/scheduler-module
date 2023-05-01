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
      if (result.length !== 0 && result.PriorityNumber !== null)
        priorityQueue.setQueue(result.PriorityNumber);
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

  static createAppointment(newAppointment, result) {
    dbConn.query(
      "INSERT INTO Appointment set ?",
      newAppointment,
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

  static approveAppointment(appointmentId, result) {
    var priorityNumber = priorityQueue.enqueue();
    const query =
      "UPDATE Appointment SET status = 1, PriorityNumber = ? WHERE AppointmentId  = ?";
    dbConn.query(query, [priorityNumber, appointmentId], (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        console.log(res);
        result(null, res);
      }
    });
  }

  static retrieveAllAppointments(result) {
    dbConn.query("SELECT * FROM appointment", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("posts: ", res);
        result(null, res);
      }
    });
  }

  static retrieveAppointmentsByStudentId(studentId, result) {
    dbConn.query(
      "SELECT * FROM appointment WHERE StudentId = ?",
      studentId,
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

  static retrieveAppointmentsByFacultyId(facultyId, result) {
    dbConn.query(
      "SELECT * FROM appointment WHERE ScheduleId IN (SELECT ScheduleId FROM schedule WHERE FacultyId = ?)",
      facultyId,
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
  static cancelAppointment(appointmentId, result) {
    dbConn.query(
      "DELETE FROM appointment WHERE AppointmentId = ?",
      appointmentId,
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

module.exports = Appointment;
