import React from 'react';

const NoteList = ({ notes, onDelete }) => {
    return (
        <div className="note-list">
            <h2>All Notes</h2>
            {notes.length === 0 ? (
            <p>No notes available.</p>
            ) : (
            <ul>
                {notes.map((note) => (
                    <li key={note._id} className="note-item">
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <p><strong>Cat Fact:</strong> {note.catfact}</p>
                        <button onClick={() => onDelete(note._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default NoteList;