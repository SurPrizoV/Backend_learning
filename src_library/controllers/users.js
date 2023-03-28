const User = require("../models/user");

const getUsers = (request, response) => {
  User.find({})
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const addUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const updateUser = (request, response) => {
  const { id } = request.params;
  User.findByIdAndUpdate(id, { ...request.body })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500);
    });
};

const deleteUser = (request, response) => {
  const { id } = request.params;
  User.findByIdAndUpdate(id, { ...request.body })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500);
    });
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
