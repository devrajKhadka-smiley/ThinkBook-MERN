// const getallnotes = (req, res) => {
//   res.status(200).json({ message: "You Just Got the Notes" });
// };

// export const addnote = (req, res) => {
//   res.status(201).json({ message: "Post Created Successfully!" });
// };

// export function updatenote(req, res) {
//   res.status(200).json({ message: "Put Updated successfully!" });
// }

// export function deletenote(req, res) {
//   res.status(200).json({ message: "delete Updated successfully!" });
// }

// export { getallnotes };

import { Note } from "../models/Note.js";

export async function getallnotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error fetching notes:", error);
    res
      .status(500)
      .json({ message: "Error fetching notes", error: error.message });
  }
}

export async function addnote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      console.log("Title and content are required");
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const note = new Note({ title, content });
    const savedNote = await note.save();
    // await newNOte.save();
    res.status(201).json({ savedNote, message: "Note added successfully" });
  } catch (error) {
    console.log("Error adding note:", error);
    res
      .status(500)
      .json({ message: "Error adding note", error: error.message });
  }
}

export async function updatenote(req, res) {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatenote) return res.status(404).json({ message: "Note not found" });
    if (!title || !content) {
      console.log("Title and content are required");
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    res.status(200).json({ message: "Note Updated Successfully!" });
  } catch (error) {
    console.log("Error updating note:", error);
    res
      .status(500)
      .json({ message: "Error updating note", error: error.message });
  }
}

export async function deletenote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Server error" });
  }
}
