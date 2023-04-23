const { StripePayment } = require("../controllers/Stripe");

const stripeRouter = require("express").Router();

//Payment
stripeRouter.post("/payment", StripePayment);

module.exports = stripeRouter;
