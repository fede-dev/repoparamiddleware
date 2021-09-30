const express = require("express");
const router = express.Router();
const { userController } = require("../controller");
//const userMiddleware = require("../middleware/user.middleware");
const { userModel } = require("../model");

const findByName = (name) =>
  userModel.getUsers().find((item) => item.name == name);
//console.log(findByName());

const userNameMidd = (req, res, next) => {
  if (findByName().nombre == req.body.nombre) {
    res.status(400).json({ msg: "Usuario ya registrado" });
  } else {
    next();
  }
};

router.get("/", userController.getAllUsers);
router.post("/", userNameMidd, userController.createUser);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);

module.exports = router;
