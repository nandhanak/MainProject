const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 30,
    },
    hashPassword: {
      type: String,
      required: true,
      minLength: 6,
    },
    firstName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    lastName: {
      type: String,
      required: true,
   
    },

  }
 
);

const User = mongoose.model("User", userSchema);

module.exports = User;