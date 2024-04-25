const Login = require("../models/login.model");
const bcrypt = require("bcrypt");

class LoginController {
  // [POST] /login
  async login(req, res, next) {
    try {
      const check = await Login.findOne({ email: req.body.email });
      if (!check) {
        return res.status(404).send({ message: "Email Not found." });
      }
      const isPasswordMatch = req.body.password === check.password;
      if (isPasswordMatch) {
        return res.status(200).send({
          id: check._id,
          username: check.username,
          email: check.email,
        });
      } else {
        return res.status(401).send({ message: "Invalid Password!" });
      }
    } catch (error) {
      res.status(500).send({ message: err });
      return;
    }
  }
}

module.exports = new LoginController();
