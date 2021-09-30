const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const allUsers = fs.readFileSync(path.join(__dirname, "./user.json"), {
    encoding: "utf-8",
  });
  return JSON.parse(allUsers);
};

const getCreateUser = (user) => {
  const db = getUsers();
  const newUser = {
    id: db.length,
    ...user,
  };
  db.push(newUser);
  fs.writeFileSync(
    path.join(__dirname, "./user.json"),
    JSON.stringify(newUser),
    {
      encoding: "utf-8",
    }
  );
  return true;
};

const getUpdateUser = (id, newUser) => {
  const userId = getUsers(id).findIndex((item) => item.id == id);
  const user = newUser;
  const db = getUsers();
  db[userId] = {
    id,
    ...user,
  };
  fs.writeFileSync(path.join(__dirname, "./user.json"), JSON.stringify(db), {
    encoding: "utf-8",
  });
  return true;
};

const getDeleteModel = (id) => {
  const deleteUser = getUsers(id).filter((item) => item.id != id);
  fs.writeFileSync(
    path.join(__dirname, "./user.json"),
    JSON.stringify(deleteUser),
    {
      encoding: "utf-8",
    }
  );
  return true;
};

module.exports = {
  getUsers,
  getCreateUser,
  getUpdateUser,
  getDeleteModel,
};
