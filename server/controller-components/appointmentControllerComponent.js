const Appointment = require("../model-components/appointmentModelComponent");

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
