const {
  VerfiyToken,
  VerfiyTokenAndAuthorization,
  VerfiyTokenAndAdmin,
} = require("../Helper");
const {
  CreateOrder,
  UpdateOrder,
  DeleteOrder,
  GetUserOrder,
  GetAllOrders,
  GetOrderStats,
} = require("../controllers/Order");

const orderRouter = require("express").Router();

//Get stats
orderRouter.get("/income", VerfiyTokenAndAdmin, GetOrderStats);

//Create Order
orderRouter.post("/", VerfiyToken, CreateOrder);

//Update Order
orderRouter.put("/:id", VerfiyTokenAndAdmin, UpdateOrder);

//Delete Order
orderRouter.delete("/:id", VerfiyTokenAndAdmin, DeleteOrder);

//Get user Order
orderRouter.get("/find/:userId", VerfiyTokenAndAuthorization, GetUserOrder);

//Get Order
orderRouter.get("/", VerfiyTokenAndAdmin, GetAllOrders);

module.exports = orderRouter;
