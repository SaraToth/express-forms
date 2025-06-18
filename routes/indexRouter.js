const { Router } = require("express");
const indexRouter = Router();
const { getCreateUser, postCreateUser, getIndex, getUpdateUser, postUpdateUser, postDeleteUser } = require("../controllers/indexController");

indexRouter.get("/create", getCreateUser);
indexRouter.post("/create", postCreateUser);
indexRouter.get("/:id/update", getUpdateUser);
indexRouter.post("/:id/update", postUpdateUser)
indexRouter.post("/:id/delete", postDeleteUser)
indexRouter.get("/", getIndex);

module.exports = indexRouter;