// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  }
);

// const User = mongoose.model("User", UserSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     username: Joi.string().required().label("User Name"),
//     email: Joi.string().email().required().label("Email"),
//     password: passwordComplexity().required().label("Password"),
//     isAdmin: Joi.string().label("Is Admin"),
//   });
//   return schema.validate(data);
// };


//module.exports = {User, validate};
module.exports = mongoose.model("User", UserSchema);