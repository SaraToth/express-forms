const usersStorage = require("../storages/usersStorage");

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters";

const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
        .isAlpha().withMessage(`Last name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
];

const postCreateUser = [
    validateUser,

    // Check for any validation errors
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("createUser", {
                errors: errors.array(),
            });
        }

        const { firstName, lastName } = req.body;
        usersStorage.addUser({ firstName, lastName });
        res.redirect("/");
    },
];

const postUpdateUser = [
    validateUser,

    (req, res) => {
        const user = usersStorage.getUser(req.params.id);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("updateUser", {
                user: user,
                errors: errors.array(),
            });
        }

        const { firstName, lastName } = req.body;
        const id = req.params.id;

        usersStorage.updateUser(id, { firstName, lastName });
        res.redirect("/");
    }
];

const postDeleteUser = (req, res) => {
    const id = req.params.id;
    usersStorage.deleteUser(id);
    res.redirect("/");
}

const getUpdateUser = (req, res) => {
    const id = req.params.id;
    const user = usersStorage.getUser(id);
    res.render("updateUser", { user: user });
};


const getCreateUser = (req, res) => {
    const thing = req.params;
    res.render("createUser");
};

const getIndex = (req, res) => {
    res.render("index", {
        users: usersStorage.getUsers(),
    });
};

module.exports = { getCreateUser, postCreateUser, getIndex, getUpdateUser,postUpdateUser, postDeleteUser };