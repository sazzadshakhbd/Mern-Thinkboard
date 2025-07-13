import mongoose from "mongoose";
// Create a schema for the Note model
// Model based on the schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Created and updated timestamps
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
