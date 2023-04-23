// const userModel = require("../models/user");
// const CryptoJS = require("crypto-js");

// //Update User
// module.exports.UpdateUser = async function (req, res) {
//   if (req.body.password) {
//     req.body.password = CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SEC
//     ).toString();
//   }
//   try {
//     const updateUser = await userModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updateUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// //Delete User
// module.exports.DeleteUser = async function (req, res) {
//   try {
//     await userModel.findByIdAndDelete(req.params.id);
//     res.status(200).json("Delete Successfully");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// //Get User
// module.exports.GetUser = async function (req, res) {
//   try {
//     const user = await userModel.findById(req.params.id);
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// //Get All User
// module.exports.GetAllUser = async function (req, res) {
//   const query = req.query.new;
//   try {
//     const users = query
//       ? await userModel.find().sort({ _id: -1 }).limit(5)
//       : await userModel.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// //Get User Stats
// module.exports.GetUserStats = async function (req, res) {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await userModel.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
