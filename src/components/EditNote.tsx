import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

interface EditNoteProps {
  noteId: string;
}

const EditNote: React.FC<EditNoteProps> = ({ noteId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`/journalEntries/${noteId}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('Fetch note failed:', error);
      }
    };
    fetchNote();
  }, [noteId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/JournalEntries/${noteId}`, { title, content });
      // Handle successful note update, e.g., refresh notes list
    } catch (error) {
      console.error('Update note failed:', error);
    }
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
};

export default EditNote;
