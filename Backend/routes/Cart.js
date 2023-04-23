const {
  VerfiyToken,
  VerfiyTokenAndAuthorization,
  VerfiyTokenAndAdmin,
} = require("../Helper");
const {
  CreateCart,
  UpdateCart,
  DeleteCart,
  GetUserCart,
  GetAllCarts,
} = require("../controllers/Cart");

const cartRouter = require("express").Router();

//Create Cart
cartRouter.post("/", VerfiyToken, CreateCart);

//Update Cart
cartRouter.put("/:id", VerfiyTokenAndAuthorization, UpdateCart);

//Delete Cart
cartRouter.delete("/:id", VerfiyTokenAndAuthorization, DeleteCart);

//Get user Cart
cartRouter.get("/find/:userId", VerfiyTokenAndAuthorization, GetUserCart);

//Get Cart
cartRouter.get("/", VerfiyTokenAndAdmin, GetAllCarts);

module.exports = cartRouter;
