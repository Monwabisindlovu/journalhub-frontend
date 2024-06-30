import React, { useState } from 'react';
import axios from '../api/axios';

const CreateProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/profile', { name, email, bio });
      // Handle successful profile creation, e.g., redirect, etc.
    } catch (error) {
      console.error('Create profile failed:', error);
    }
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Bio:</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
