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

  // [POST] /news
  create(req, res, next) {
    const news = new News(req.body);
    news
      .save()
      .then(() => res.status(200).send({ message: "Create successfully" }))
      .catch(next);
  }

  // [PUT] /news/:_id
  edit(req, res, next) {
    News.updateOne({ _id: req.params._id }, req.body)
      .then(() => res.status(200).send({ message: "Edit successfully" }))
      .catch(next);
  }

  // [DELETE] /news/:_id
  delete(req, res, next) {
    News.deleteOne({ _id: req.params._id })
      .then(() => res.status(200).send({ message: "Delete successfully" }))
      .catch(next);
  }
}

module.exports = new NewsController();
