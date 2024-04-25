const News = require("../models/news.model");

class NewsController {
  // [GET] /news
  index(req, res, next) {
    News.find({})
      .then((data) => res.json(data))
      // .then((data) => res.render('news', {data}))
      .catch(next);
  }

  // [GET] /news/:_id
  show(req, res, next) {
    News.findOne({ _id: req.params._id })
      .then((news) => res.json(news))
      .catch(next);
  }
}

module.exports = new NewsController();
