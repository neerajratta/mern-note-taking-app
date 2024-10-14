const express = require('express');
const router = express.Router();

const { createNote, getAllNotes, deleteNote, searchNote } = require('../controllers/NoteController');

// Route to create a new note
router.post('/notes', createNote);

// Route to get all notes
router.get('/notes', getAllNotes);

// Route to delete a notes by ID
router.delete('/notes/:id', deleteNote);

// Route to Search Notes
router.get('/search', searchNote);


module.exports = router;