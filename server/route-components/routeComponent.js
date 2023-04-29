const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");

router.post("/login", accountController.login);
//Accounts
router.post("/addAccount", accountController.create);
router.post("/retrieveAccounts", accountController.retrieveAccounts);
router.patch("/disableAccount", accountController.disableAccount);
router.patch("/updateAccount", accountController.updateAccount);
//Schedules
router.post("/addSchedule", accountController.addSchedule);
router.post("/retrieveSchedules", accountController.retrieveSchedules);
module.exports = router;
