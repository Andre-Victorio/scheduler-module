const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");
router.post("/addAccount", accountController.create);
router.post("/retrieveAccounts", accountController.retrieveAccounts);
router.patch("/disableAccount", accountController.disableAccount);
router.patch("/updateAccount", accountController.updateAccount);
router.post("/addSchedule", accountController.addSchedule);
router.post("/login", accountController.login);
module.exports = router;
