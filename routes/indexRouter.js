const { Router } = require("express");
const indexRouter = Router();
const usersStorage = require("../storages/usersStorage");

indexRouter.get("/create", (req, res) => {
    res.render("createUser");
});

indexRouter.post("/create", (req, res) => {
    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect("/");
});

indexRouter.get("/", (req, res) => {
    res.render("index", {
        users: usersStorage.getUsers(),
    });
});

module.exports = indexRouter;