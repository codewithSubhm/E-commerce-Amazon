const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I1sY3FxUIlyy8PhbWjkNIWslH1LO51X7neZkzBJWrHa3iisoYRkqDtJGxATHYl1pOcEfnlYpJpzOMLQEz8mBMe3008VpHCluS"
);

//API

//-APP Config
const app = express();

//-Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//-API Routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  //Ok- created--201 response
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen Command
exports.api = functions.https.onRequest(app);