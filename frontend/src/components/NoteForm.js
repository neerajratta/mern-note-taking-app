import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/notes', { title, content });
            onAdd(response.data);
            setTitle('');
            setContent('');
        } catch (err) {
            setError('Failed to add note. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <h2>Add New Note</h2>
            {error && <p className="error">{error}</p>}
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            />
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
            ></textarea>
            <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Note'}
            </button>
        </form>
        );
    };

export default NoteForm;