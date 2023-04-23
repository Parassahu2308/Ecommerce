const orderModel = require("../models/Order");

//Create Order
module.exports.CreateOrder = async function (req, res) {
  const newOrder = new orderModel(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update Order
module.exports.UpdateOrder = async function (req, res) {
  try {
    const updateOrder = await orderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Delete Order
module.exports.DeleteOrder = async function (req, res) {
  try {
    await orderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get User Order
module.exports.GetUserOrder = async function (req, res) {
  try {
    const order = await orderModel.find({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get All Orders
module.exports.GetAllOrders = async function (req, res) {
  try {
    const order = await orderModel.find();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get Order Stats
module.exports.GetOrderStats = async function (req, res) {
  const date = new Date(); // 1 Sept
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); // 1 Aug
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)); // 1 July

  try {
    const income = await orderModel.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
};
