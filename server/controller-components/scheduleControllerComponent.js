const Schedule = require("../model-components/scheduleModelComponent");
exports.addSchedule = (req, res) => {
  const newSchedule = new Schedule(req.body);
  //handles null error
  console.log(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({error: true, message: "Please provide all required field"});
  } else {
    Schedule.addSchedule(newSchedule, function (err, scheduleId) {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        status: 200,
        message: "New schedule has successfully been added.",
        data: scheduleId,
      });
    });
  }
};

exports.retrieveSchedules = (req, res) => {
  Schedule.retrieveSchedules(req.body.accountId, function (err, post) {
    if (err) {
      res.send(err);
    }
    console.log("res", post);
    res.send({status: 200, data: post});
  });
};

exports.deleteSchedule = (req, res) => {
  console.log(req.body);
  Schedule.deleteSchedule(req.body.scheduleId, function (err, post) {
    if (err) {
      res.send(err);
    }
    console.log("res", post);
    res.send({status: 200, data: post});
  });
};

