const userNameMidd = (req, res, next) => {
  if (user.nombre == name) {
    res.status(300).json({ msg: "Usuario ya registrado" });
  } else {
    next();
  }
};
