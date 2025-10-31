const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    viewers: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema, "articles");
module.exports = Article;
