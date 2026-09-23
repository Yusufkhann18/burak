import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3003;
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
