const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

// router.post('/payment', async(req, res)=>{
//   //const {amount, source} = req.body

//   try{
//     const payment = await stripe.charges.create({
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "usd",
//     })

//     res.json(payment)
//   } catch(error) {
//     console.error(error)
//     res.status(500).send("error")
//   }
// })

module.exports = router;