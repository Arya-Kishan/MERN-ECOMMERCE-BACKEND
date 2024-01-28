const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8080
require('dotenv').config()
require('./mongoDB')
const userRouter = require("./routes/UserRoute")
const productRouter = require("./routes/ProductRoute")
const cartRouter = require("./routes/CartRoute")
const orderRouter = require("./routes/OrderRoute")
const categoryRouter = require("./routes/CategoryRoute")
const brandRouter = require("./routes/BrandRoute")
const reviewRouter = require("./routes/ProductReviewRoute")
const path = require("path");
const stripe = require("stripe")('sk_test_51OTSOaSCLk89VVV2rKVOHYuhtVhatr42Idu62Nn2xa0Pr3Fsee5JL687eoWbCAkaU7DAMKXrSUkpvjmkcpuWyw2U00ZIT6Ag03');

const server = express();


server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, 'dist')));




server.use("/user", userRouter)
server.use("/product", productRouter)
server.use("/cart", cartRouter)
server.use("/order", orderRouter)
server.use("/categories", categoryRouter)
server.use("/brands", brandRouter)
server.use("/review", reviewRouter)
// PAYMENT INTEGRATION
server.post('/create-checkout-session', async (req, res) => {

  console.log(req.body);

  const lineItems = req.body.map((e) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: e.itemId.title
      },
      unit_amount: e.itemId.price * 100
    },
    quantity: e.quantity
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `http://localhost:5173/orderSuccess`,
    cancel_url: `http://localhost:5173/orderSuccess`,
  });

  res.json({ id: session.id });

});



server.use("/", (req, res) => {
  res.status(400).json({ "message": "NORMAL ROUTE" })
})

server.listen(PORT, () => {
  console.log(`SERVER LISTENED AT 8080`);
})