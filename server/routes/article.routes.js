const {
  createArticle,
  getAllArticles,
} = require("../controllers/article.controller");
const Article = require("../models/article.model");

const router = require("express").Router();

// Create Article
router.post("/", createArticle);

// Get All Articles
router.get("/", getAllArticles);

// Get One Article By Id

router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found", data: {} });
    }

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
router.put("/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
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

// Delete An Article
router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Article has been deleted successfully",
      data: {},
    });
  } catch (error) {
    console.log("[GET ARTICLE BY ID ERROR]", error);
    res
      .status(500)
      .json({ message: "Error occurred fetching article, try again later!" });
  }
});

module.exports = router;
