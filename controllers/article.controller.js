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

module.exports = {createArticle}
