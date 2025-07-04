import express from "express";
// const express = require("express");
// const noteRoutes = require("./routes/noteRoutes");
// import noteRoutes from "src/routes/noteRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middlware/ratelimiter.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// connectdb();

//Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true,
  })
);
app.use(express.json());
app.use(ratelimiter); //::1 localhost for ip

app.use("/api/notes/", noteRoutes);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});
