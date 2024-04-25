class UserController {
  // [GET] /user
  index(req, res) {
    res.send("User");
  }

  // [GET] /user/info
  info(req, res) {
    const user = {
      id: 1,
      userId: 1,
      title: "thao",
    };
    res.send(user);
  }
}

module.exports = new UserController();
