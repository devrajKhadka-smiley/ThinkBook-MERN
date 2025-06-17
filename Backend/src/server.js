import express from "express";
// const express = require("express");
// const noteRoutes = require("./routes/noteRoutes");
// import noteRoutes from "src/routes/noteRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

connectdb();

//Middleware
app.use(express.json());
app.use("/api/notes/", noteRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
