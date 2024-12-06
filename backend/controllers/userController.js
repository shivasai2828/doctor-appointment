import userModel from "./../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }
    // validate email format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a Valid Email",
      });
    }
    //validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password should be at least 8 characters long",
      });
    }
    // check if email already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "Email already exists" });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
      name,
      email,
      password: hashedPassword,
    };
    // create new user
    const newUser = new userModel(userData);
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    res.json({ success: true, token, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// api for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      res.json({ success: true, token, message: "success" });
    } else {
      return res.json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    console.log(error, "error catch");
    res.json({ success: false, message: error.message });
  }
};

// API to get user profile data

const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//API to update user profile

const updateProfile = async (req, res) => {
  try {
    const { userId, name, address, dob, gender } = req.body;
    const imageFile = req.file;
    if (!name || !dob || !gender) {
      return res.json({ success: false, message: "Missing Details" });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      address: JSON.parse(address),
      dob,
      gender,
    });
    if (imageFile) {
      // uploade image in cloudinary
      const imageUploade = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUploade.secure_url;
      await userModel.findByIdAndUpdate(userId, { image: imageUrl });
    }
    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, getProfile, updateProfile };
