import express from "express";
import {
  getallnotes,
  getnotesbyid,
  addnote,
  updatenote,
  deletenote,
} from "../controllers/noteControllers.js";

const router = express.Router();

router.get("/", getallnotes);

router.get("/:id", getnotesbyid);

router.post("/", addnote);

router.put("/:id", updatenote);

router.delete("/:id", deletenote);

export default router;
