const { Router } = require("express");
const indexRouter = Router();
const usersStorage = require("../storages/usersStorage");
const { getCreateUser, postCreateUser, getIndex } = require("../controllers/indexController");

indexRouter.get("/create", getCreateUser);

indexRouter.post("/create", postCreateUser);

indexRouter.get("/", getIndex);

module.exports = indexRouter;