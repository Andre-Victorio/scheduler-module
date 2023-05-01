const Appointment = require("../model-components/appointmentModelComponent");
const StudentAccount = require("../model-components/studentModelComponent");
const FacultyAccount = require("../model-components/facultyModelComponent");
const Schedule = require("../model-components/scheduleModelComponent");
exports.createAppointment = (req, res) => {
  const newAppointment = new Appointment(req.body);
  //   console.log(req.body);
  Appointment.createAppointment(newAppointment, function (err, appointmentId) {
    if (err) {
      res.send(err);
    }
    res.json({
      error: false,
      status: 200,
      message: "New Appointment has successfully been added.",
      data: appointmentId,
    });
  });
};

exports.approveAppointment = (req, res) => {
  //  console.log(req.body.appointmentId);
  Appointment.approveAppointment(
    req.body.appointmentId,
    function (err, appointmentId) {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "Appointment has been approved",
        data: appointmentId,
      });
    }
  );
};

exports.retrieveAllAppointments = (req, res) => {
  Appointment.retrieveAllAppointments(function (err, post) {
    console.log("controller");
    if (err) {
      res.send(err);
    }
    console.log("res", post);
    res.send({status: 200, data: post});
  });
};

exports.cancelAppointment = (req, res) => {
  Appointment.cancelAppointment(req.body.appointmentId, function (err, post) {
    console.log("controller");
    if (err) {
      res.send(err);
    }
    console.log("res", post);
    res.send({status: 200, data: post});
  });
};

// exports.retrieveAppointmentsById = (req, res) => {
//   var x = req.body["userType"] === "student" ? StudentAccount : FacultyAccount;

//   var pending = [];
//   if (req.body["userType"] === "student") {
//     Appointment.retrieveAppointmentsByStudentId(
//       req.body.accountId,
//       function (err, appointments) {
//         console.log("controller");
//         if (err) {
//           res.send(err);
//         }
//         console.log("res", appointments);
//         // for (var i in appointments) {
//         //   if (appointments[i].status === 0) {
//         //     Schedule.findById(appointments[i].ScheduleId, function(err, schedule){
//         //       StudentAccount.findById(
//         //         appointments[i].StudentId,
//         //         function (err, studentAccount) {
//         //           if (err) {
//         //             res.send(err);
//         //           }
//         //         }
//         //       );
//         //     })

//         //   }
//         // }
//         let approved = [];
//         appointments.forEach(function (data) {
//           if (data.status === 0) {
//             Schedule.findById(data.ScheduleId, function (err, schedule) {
//               if (err) {
//                 res.send(err);
//               }
//               schedule.forEach(function (scheduleData) {
//                 FacultyAccount.findById(
//                   scheduleData.FacultyId,
//                   function (err, faculty) {
//                     if (err) {
//                       res.send(err);
//                     }
//                     StudentAccount.findById(
//                       data.StudentId,
//                       function (err, student) {
//                         if (err) {
//                           res.send(err);
//                         }
//                         approved.push("1");
//                       }
//                     );
//                   }
//                 );
//               });
//             });
//           }
//         });
//         console.log("aproved" + approved);
//         // FacultyAccount.findById(appointments[i].StudentId, function (err, studentAccount) {
//         //   if (err) {
//         //     res.send(err);
//         //   }

//         // });
//         res.send({
//           status: 200,
//           data: appointments,
//           // schedule: scheduleData,
//           // faculty: faculty,
//         });
//       }
//     );
//   }
// };

exports.retrieveAppointmentsById = (req, res) => {
  console.log(req.body.accountId);
  if (req.body.userType === "student") {
    Appointment.retrieveAppointmentsByStudentId(
      req.body.accountId,
      function (err, post) {
        console.log("controller");
        if (err) {
          res.send(err);
        }
        console.log("res", post);
        res.send({status: 200, data: post});
      }
    );
  } else {
    Appointment.retrieveAppointmentsByFacultyId(
      req.body.accountId,
      function (err, post) {
        console.log("controller");
        if (err) {
          res.send(err);
        }
        console.log("res", post);
        res.send({status: 200, data: post});
      }
    );
  }
};
