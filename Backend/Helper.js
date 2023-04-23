const jwt = require("jsonwebtoken");

const VerfiyToken = function (req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(403).json("Token is Invalid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const VerfiyTokenAndAuthorization = function (req, res, next) {
  VerfiyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not to be allowed");
    }
  });
};

const VerfiyTokenAndAdmin = function (req, res, next) {
  VerfiyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not to be allowed");
    }
  });
};

module.exports = {
  VerfiyToken,
  VerfiyTokenAndAuthorization,
  VerfiyTokenAndAdmin,
};
