const userModel = require("../models/user");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register User
module.exports.RegisterUser = async function (req, res) {
  const newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Login User
module.exports.LoginUser = async function (req, res) {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    !user && res.status(401).json("User Not Find");

    const hashedPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("Password incorrect");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({
      msg: "Login Successfully",
      ...others,
      accessToken,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
