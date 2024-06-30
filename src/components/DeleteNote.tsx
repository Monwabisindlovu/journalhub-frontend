import React from 'react';
import axios from '../api/axios';

interface DeleteNoteProps {
  noteId: string;
}

const DeleteNote: React.FC<DeleteNoteProps> = ({ noteId }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/JournalEntries/${noteId}`);
      // Handle successful note deletion, e.g., refresh notes list
    } catch (error) {
      console.error('Delete note failed:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Note</button>
  );
};

export default DeleteNote;
