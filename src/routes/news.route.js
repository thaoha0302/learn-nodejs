const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/store", newsController.showStore);
router.patch("/:_id/restore", newsController.restore);
router.delete("/:_id/force", newsController.force);
router.get("/:_id", newsController.show);
router.put("/:_id", newsController.edit);
router.delete("/:_id", newsController.delete);
router.post("/", newsController.create);
router.get("/", newsController.index);

module.exports = router;
