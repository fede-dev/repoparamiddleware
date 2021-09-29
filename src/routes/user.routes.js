const express = require("express");
const router = express.Router();
const userController = require("../controller");

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/", userController.updateUsers);
router.delete("/", userController.deleteUsers);

module.exports = router;
