const Article = require("../models/article.model");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Article route is working");
});

router.post("/", async (req, res) => {
  try {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      image: "https://example.com/image.jpg",
    });

    await newArticle.save();
    res.status(201).json({ message: "Article created", article: newArticle });
  } catch (error) {
    console.log("[CREATE ARTICLE ERROR]", error);
  }
});

module.exports = router;
