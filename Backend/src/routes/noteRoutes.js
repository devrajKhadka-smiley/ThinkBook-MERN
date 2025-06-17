import express from "express";
import {
  getallnotes,
  addnote,
  updatenote,
  deletenote,
} from "../controllers/noteControllers.js";

const router = express.Router();

router.get("/", getallnotes);

router.post("/", addnote);

router.put("/:id", updatenote);

router.delete("/:id", deletenote);

export default router;
