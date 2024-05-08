const bcrypt = require("bcrypt");
const genereteToken = require("../utils/jwtVerify");
const User = require("../models/usermodels");

//signup
const signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    console.log(email);

    const userExist = await User.find({ email });

    if (userExist) {
     
      return res.send("User already exists");
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email,
      firstName,
      lastName,
      hashPassword,
    });
    const newUserCreated = await newUser.save();

    if (newUserCreated) {
      return res.send("User is  created");
    }

    const token = genereteToken(email);
   res.send(token)
   console.log(token);
    res.send("Signed up successfully!");
  } catch (error) {
    console.log(error, "Something wrong");
    res.status(500).send("Internal Server Error");
    
  }
};

//signin
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.find({ email });

    if (!user) {
      return res.send("User not found");
    }

    const matchPassword = await bcrypt.compare(password, user.hashPassword);

    if (!matchPassword) {
      return res.send("Password is incorrect");
    }

    const token = generateToken(email);
    res.send(token)
    res.send("Logged in successfully!");
  } catch (error) {
    console.log(error, "Something wrong");
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { signup, signin };