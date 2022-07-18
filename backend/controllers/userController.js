import User from "../model/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../util/generateToken.js";

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log("req.body.name", req.body.name);

  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(401);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid credentials");
  }
});

const getAllUsers=asyncHandler(async(req,res)=>{
  const users=await User.find({})
  res.send(users)
})

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.password === password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
export { register, login,getAllUsers };
