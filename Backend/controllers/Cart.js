const cartModel = require("../models/Cart");

//Create Cart
module.exports.CreateCart = async function (req, res) {
  const newCart = new cartModel(req.body);
  try {
    const saveCart = await newCart.save();
    res.status(200).json(saveCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update Cart
module.exports.UpdateCart = async function (req, res) {
  try {
    const updateCart = await cartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// //Delete Cart
module.exports.DeleteCart = async function (req, res) {
  try {
    await cartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

// //Get User Cart
module.exports.GetUserCart = async function (req, res) {
  try {
    const cart = await cartModel.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

// //Get All Carts
module.exports.GetAllCarts = async function (req, res) {
  try {
    const cart = await cartModel.find();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};
