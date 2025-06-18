const { Router } = require("express");
const indexRouter = Router();
const { getCreateUser, postCreateUser, getIndex, getUpdateUser, postUpdateUser } = require("../controllers/indexController");

indexRouter.get("/create", getCreateUser);
indexRouter.post("/create", postCreateUser);
indexRouter.get("/:id/update", getUpdateUser);
// indexRouter.post("/:id/update", postUpdateUser)
indexRouter.get("/", getIndex);

module.exports = indexRouter;