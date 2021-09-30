const express = require("express");
const morgan = require("morgan");
const app = express();

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ msg: `Ha ocurrido un erros ${err.message}` });
};

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use("/users", require("./routes"));

module.exports = app;
