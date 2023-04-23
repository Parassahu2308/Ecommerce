const { VerfiyTokenAndAdmin } = require("../Helper");
const {
  CreateProduct,
  GetProduct,
  DeleteProduct,
  UpdateProduct,
  GetAllProducts,
} = require("../controllers/Product");

const productRouter = require("express").Router();

//Create Product
productRouter.post("/", VerfiyTokenAndAdmin, CreateProduct);

//Update Product
productRouter.put("/:id", VerfiyTokenAndAdmin, UpdateProduct);

//Delete Product
productRouter.delete("/:id", VerfiyTokenAndAdmin, DeleteProduct);

//Get Product
productRouter.get("/find/:id", GetProduct);

//Get Product
productRouter.get("/", GetAllProducts);

module.exports = productRouter;
