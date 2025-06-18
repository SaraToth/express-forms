const usersStorage = require("../storages/usersStorage");

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