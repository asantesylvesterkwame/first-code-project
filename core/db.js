const mongoose = require("mongoose")

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("[ERROR] Connecting to DB", error);
  }
};

module.exports = { dbConnect };
