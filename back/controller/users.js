const User = require("../models/usersSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");

// Get All Users
const allUsers = async (req, res) => {
  try {
    let users = await User.find();
    console.log(users);
    res.json(users);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Add New User
const addUser = async (req, res) => {
  let user = req.body;
  try {
    let savedUser = await User.create(user);
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  let { id } = req.params;
  try {
    await User.deleteOne({ _id: id });
    res.json({ message: "user deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
// search with numverify using axios
const searchNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    // Make API call to NumVerify API
    const response = await axios.get(
      `https://api.numlookupapi.com/v1/validate/${phoneNumber}?apikey=yF0w9Lhxv9DnYl97frwHsGV4Hcj8Y56MTxtldKTk&country_code=EG`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//update searchNumber array
const updateSearchArr = async (req, res) => {
  let { id } = req.params;
  let { number, status, countryName } = req.body;
  try {
    await User.updateOne(
      { _id: id },
      { $push: { searchNumber: { number, status, countryName } } }
    );
    console.log();
    res.json({ message: "User updated" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// get searchNumber array
const getSearchNumber = async (req, res) => {
  let { id } = req.params;
  try {
    let history = await User.findOne({ _id: id }, { searchNumber: 1 });
    res.json(history);
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Edit User
const editUser = async (req, res) => {
  let { id } = req.params;
  let { firstName } = req.body;
  try {
    await User.updateOne({ _id: id }, { firstName: firstName });
    res.json({ message: "User updated" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Login
const login = async function (req, res) {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    let valid = bcrypt.compareSync(password, user.password);
    if (valid) {
      let token = jwt.sign(
        {
          userId: user._id,
          userName: user.name,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ message: "Password is Wrong" });
    }
  } else {
    res.status(401).json({ message: "Email not found" });
  }
};

module.exports = {
  allUsers,
  addUser,
  deleteUser,
  editUser,
  login,
  updateSearchArr,
  searchNumber,
  getSearchNumber,
};
