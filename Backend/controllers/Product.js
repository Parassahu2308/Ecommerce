const productModel = require("../models/Product");

//Create Product
module.exports.CreateProduct = async function (req, res) {
  const newProduct = new productModel(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update Product
module.exports.UpdateProduct = async function (req, res) {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Delete Product
module.exports.DeleteProduct = async function (req, res) {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get Product
module.exports.GetProduct = async function (req, res) {
  try {
    const product = await productModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get All Products
module.exports.GetAllProducts = async function (req, res) {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;
    if (qNew) {
      products = await productModel.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await productModel.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await productModel.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
