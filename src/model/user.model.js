const fs = require("fs");
const path = require("path");

const userModel = {
  getUsers: () => {
    const allUsers = fs.readFileSync(path.join(__dirname, "JSON"), {
      encoding: "utf-8",
    });
    return JSON.parse(allUsers);
  },
  getCreateUser: (user) => {
    const newUser = user;
    const db = getUser();
    db.push(newUser);
    fs.writeFileSync(path.join(__dirname, "JSON"), JSON.stringify(newUser), {
      encoding: "utf-8",
    });
    return true;
  },
  getUpdateUser: (id, newUser) => {
    const userId = getUser(id).findIndex((item) => item.id == id);
    const user = newUser;
    const db = getUser();
    db[userId] = {
      id,
      ...user,
    };
    fs.writeFileSync(path.join(__dirname, "JSON"), JSON.stringify(db), {
      encoding: "utf-8",
    });
    return true;
  },
  getDeleteModel: (id) => {
    const deleteUser = getUser(id).filter((item) => item.id != id);
    fs.writeFileSync(path.join(__dirname, "JSON"), JSON.stringify(deleteUser), {
      encoding: "utf-8",
    });
    return true;
  },
};

module.exports = { userModel };
