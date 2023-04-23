const userRouter = require("express").Router();

const {
  VerfiyTokenAndAuthorization,
  VerfiyTokenAndAdmin,
} = require("../Helper");
const {
  UpdateUser,
  DeleteUser,
  GetUser,
  GetAllUser,
  GetUserStats,
} = require("../controllers/user");

//Get user stats
userRouter.get("/stats", VerfiyTokenAndAdmin, GetUserStats);

//Update User
userRouter.put("/:id", VerfiyTokenAndAuthorization, UpdateUser);

//Delete User
userRouter.delete("/:id", VerfiyTokenAndAuthorization, DeleteUser);

//Get User
userRouter.get("/find/:id", VerfiyTokenAndAdmin, GetUser);

//Get All User
userRouter.get("/", VerfiyTokenAndAdmin, GetAllUser);

module.exports = userRouter;
