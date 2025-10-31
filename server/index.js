const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { dbConnect } = require("./core/db");
const app = express();
const PORT = process.env.PORT || 8081;

const articleRoutes = require("./routes/article.routes");

app.use(express.json());

app.use("/api/v1/articles", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  dbConnect();
});
