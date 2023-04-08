const express = require("express");
const {
  allUsers,
  addUser,
  deleteUser,
  editUser,
  login,
  updateSearchArr,
  searchNumber,
  getSearchNumber,
} = require("../controller/users");

let router = express.Router();

router.get("/all-users", allUsers);

router.post("/add-user", addUser);

router.post("/updateSearch/:id", updateSearchArr);
//Search api
router.get("/search/:phoneNumber", searchNumber);

// get history
router.get("/history/:id", getSearchNumber);

router.delete("/delete-user/:id", deleteUser);

router.patch("/edit-user/:id", editUser);

router.post("/login", login);

module.exports = router;
