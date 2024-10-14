const Note = require('../models/Note');
const axios = require('axios');

// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;

    const newNote = new Note({
      title,
      content,
      catfact: catFact
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error: Unable to create note.' });
  }
};

// Get all notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error: Unable to fetch notes.' });
  }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error: Unable to delete note.' });
  }
};

// Search notes
const searchNote = async (req, res) => {
  try {
    const { q } = req.query;
    const regex = new RegExp(q, 'i');

    const notes = await Note.find({
      $or: [
        { title: regex },
        { content: regex },
        { catfact: regex }
      ]
    }).sort({ createdAt: -1 });

    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error: Unable to search notes.' });
  }
};

module.exports = {
    createNote,
    getAllNotes,
    deleteNote,
    searchNote,
};