const { createArticle } = require("../controllers/article.controller");
const Article = require("../models/article.model");

const router = require("express").Router();

// Create Article
router.post("/", createArticle);

// Get All Articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ message: "Articles fetched successfully", data: articles });
  } catch (error) {
    console.log("[GET ALL ARTICLES ERROR]", error);
    res
      .status(500)
      .json({ message: "Error occurred fetching articles, try again later!" });
  }
});

// Get One Article By Id

router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json({
      message: "Article has been fetched successfully",
      data: article,
    });
  } catch (error) {
    console.log("[GET ARTICLE BY ID ERROR]", error);
    res
      .status(500)
      .json({ message: "Error occurred fetching article, try again later!" });
  }
});

// Update An Article

// Delete An Article

module.exports = router;
