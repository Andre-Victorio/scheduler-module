const express = require("express");
const router = express.Router();
const accountController = require("../controller-components/accountControllerComponent");
router.post("/addAccount", accountController.create);
router.post("/retrieveAccounts", accountController.retrieveAccounts);
// router.get("/accounts/:accountId", accountController.findById);
// router.get("/", (req, res) => {
//   res.json({message: "Hello from server!"});
// });
// router.post("/login", accountController.findByEmailAndPassword);
// // http://localhost:3001/api/posts/
router.patch("/disableAccount", accountController.disableAccount);
router.patch("/updateAccount", accountController.updateAccount);
module.exports = router;
