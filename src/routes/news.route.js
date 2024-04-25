const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/:_id", newsController.show);
router.post("/", newsController.create);
router.put("/:_id", newsController.edit);
router.delete("/:_id", newsController.delete);
router.get("/", newsController.index);

module.exports = router;
