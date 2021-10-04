const express = require("express");
const router = express.Router();
const{ userController }= require("../controller");

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);

module.exports = router;
