const { userModel } = require("../model");

const userNameMidd = (req, res, next) => {
  if (userModel.nombre == req.body.nombre) {
    res.status(300).json({ msg: "Usuario ya registrado" });
  } else {
    next();
  }
};

module.exports = { userNameMidd };
