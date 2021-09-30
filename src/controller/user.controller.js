const { userModel } = require("../model");

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const allUsers = await userModel.getUsers();
      res.status(200).json({ users: allUsers });
      return true;
    } catch (error) {
      res.status(400).json({ msg: "users no encontrados" });
      //next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const newUser = await userModel.getCreateUser(req.body);
      res.status(200).json({ user: newUser });
    } catch (error) {
      res.status(400).json({ msg: "users no creado" });
    }
  },
  updateUsers: async (req, res, next) => {
    try {
      const updateUser = await userModel.getUpdateUser(req.params.id, req.body);
      res.status(200).json({ user: updateUser });
    } catch (error) {
      res.status(400).json({ msg: "users no modificado-actualizado" });
    }
  },
  deleteUsers: async (req, res, next) => {
    try {
      const deleteUsers = await userModel.getDeleteModel(req.params.id);
      res.status(200).json({ user: deleteUsers });
    } catch (error) {
      res.status(400).json({ msg: "users no eliminado" });
    }
  },
};

module.exports = userController;
