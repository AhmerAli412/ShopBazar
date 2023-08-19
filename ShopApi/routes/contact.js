const router = require("express").Router();
const Contact = require("../models/Contact");
//const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
// const Joi = require("joi");

//REGISTER
router.post("/contact", async (req, res) => {

  // const { error } = validate(req.body);
  // if (error)
  //   return res.status(400).send({ message: error.details[0].message });

  // const user = await User.findOne({ email: req.body.email });
  // if (user)
  //   return res.status(409).send({ message: "User with given email already Exist!" });

  const newContact = new Contact({
    username: req.body.username,
    email: req.body.email,
    subject: req.body.subject,

    message: req.body.message,

    // password: CryptoJS.AES.encrypt(
    //   req.body.password,
    //   process.env.PASS_SEC
    // ).toString(),
  });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
