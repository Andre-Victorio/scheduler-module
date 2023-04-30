const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");
const scheduleController = require("../controller-components/scheduleControllerComponent");
const appointmentController = require("../controller-components/appointmentControllerComponent");
router.post("/login", accountController.login);
//Accounts
router.post("/addAccount", accountController.create);
router.post("/retrieveAccounts", accountController.retrieveAccounts);
router.patch("/disableAccount", accountController.disableAccount);
router.patch("/updateAccount", accountController.updateAccount);
//Schedules
router.post("/addSchedule", scheduleController.addSchedule);
router.post("/retrieveSchedules", scheduleController.retrieveSchedules);
router.post("/deleteSchedule", scheduleController.deleteSchedule);
//Appointment- temp
router.post("/createAppointment", appointmentController.createAppointment);
module.exports = router;
