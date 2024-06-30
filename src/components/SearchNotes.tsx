import React, { useState } from 'react';
import axios from '../api/axios';

interface Note {
  id: string;
  title: string;
  content: string;
}

const SearchNotes: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Note[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/journalEntries?search=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Search notes failed:', error);
    }
  };

  return (
    <div>
      <h2>Search Notes</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label>Search:</label>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} required />
        </div>
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchNotes;
