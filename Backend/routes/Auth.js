const authRouter = require("express").Router();
const { RegisterUser, LoginUser } = require("../controllers/Auth");

//Register a new user
userRouter.route("/register").post(RegisterUser);

//Login a user
userRouter.route("/login").post(LoginUser);
