const authRouter = require("express").Router();
const { RegisterUser, LoginUser } = require("../controllers/Auth");

//Register a new user
authRouter.route("/register").post(RegisterUser);

//Login a user
authRouter.route("/login").post(LoginUser);

module.exports = authRouter;
