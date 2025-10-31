const createArticle = async (req, res) => {
  try {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      image: "https://example.com/image.jpg",
    });

    await newArticle.save();
    res.status(201).json({ message: "Article created", data: newArticle });
  } catch (error) {
    console.log("[CREATE ARTICLE ERROR]", error);
  }
};

const getAllArticles =  async (req, res) => {
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
}

module.exports = {createArticle, getAllArticles}
