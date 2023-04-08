const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  let { authorization } = req.headers;
  if (authorization) {
    jwt.verify(authorization, process.env.SECRET, function (err, decoded) {
      if (err) {
        res.status(401).json({ message: err.message });
      }
      if (decoded) {
        req.userName = decoded.userName;
        req.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Please Login" });
  }
}

module.exports = { auth };
