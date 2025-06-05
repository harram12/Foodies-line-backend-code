const User = require("../Model/UserModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    console.log(req.body)
    const { username, email, password ,yourchoice} = req.body;
    const olduser = await User.findOne({ email });
    if (olduser) {
      return res.status(409).json({
        message: "user has  been mightup your account please check your email",
        suceess: false,
      });
    }
    const newuser = new User({ username, email, password ,yourchoice });
    newuser.password = await bcrypt.hash(password, 10);
    await newuser.save();
    res.status(201).json({ message: "signup sucessfully", suceess: true });
  } catch (error) {
    res.status(500).json({
      message: "interval server error",
      suceess: false,
      error: error.message,
    });
  }
};

 
const signIn = async (req, res) => {
  try {
    const { email, password, yourchoice } = req.body;

    // Validate required fields
    if (!email || !password || !yourchoice) {
      return res.status(400).json({
        message: "Email, password, and your choice are all required.",
        success: false,
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found. Please check your email or sign up.",
        success: false,
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect password.",
        success: false,
      });
    }

    // Optional: You can compare or save yourchoice if you want.
    // For example, if you want to update user choice on signin:
    
    existingUser.yourchoice = yourchoice;
    await existingUser.save();
    

    // Respond success with user info
    res.status(200).json({
      message: "Signin successfully",
      success: true,
      user: {
        username: existingUser.username,
        email: existingUser.email,
        yourchoice: existingUser.yourchoice || yourchoice,
      },
    });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};



module.exports = { signUp, signIn };