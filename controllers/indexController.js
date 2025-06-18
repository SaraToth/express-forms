const usersStorage = require("../storages/usersStorage");

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters";

const getCreateUser = (req, res) => {
    res.render("createUser");
};

const postCreateUser = (req, res) => {
    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect("/");
};

const getIndex = (req, res) => {
    res.render("index", {
        users: usersStorage.getUsers(),
    });
};

module.exports = { getCreateUser, postCreateUser, getIndex };