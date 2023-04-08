const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
    },
    password: {
      type: String,
      required: true,
    },
    searchNumber: [
      {
        number: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          default: "pending",
        },
        countryName: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(this.password, salt);
  this.password = hashedPass;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
