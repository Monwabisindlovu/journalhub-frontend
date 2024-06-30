import React, { useState } from 'react';
import axios from '../api/axios';

const CreateNote: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/JournalEntries', { title, content });
      // Handle successful note creation, e.g., refresh notes list
    } catch (error) {
      console.error('Create note failed:', error);
    }
  };

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
