import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('http://localhost:5000/api/notes');
      setNotes(response.data);
    } catch (err) {
      setError('Failed to fetch notes.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      alert('Failed to delete the note.');
      console.error(err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      fetchNotes();
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/api/search?q=${searchQuery}`);
      setNotes(response.data);
    } catch (err) {
      setError('Failed to search notes.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Note Taking App</h1>
      <NoteForm onAdd={handleAddNote} />

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes..."
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {loading ? <p>Loading...</p> : <NoteList notes={notes} onDelete={handleDeleteNote} />}
    </div>
  );
};

export default App;
