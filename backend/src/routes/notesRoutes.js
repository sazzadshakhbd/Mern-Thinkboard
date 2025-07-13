import express from 'express';
const router = express.Router(); // Capital R for Router

import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
} from '../controllers/notesController.js'; // Adjusted import path

router.get('/', getAllNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);


export default router;