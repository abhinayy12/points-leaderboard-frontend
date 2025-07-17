import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export default function AddUser({ refreshUsers }) {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name.trim()) return;
    try {
      await axios.post(`${API_BASE}/users`, { name });
      setName('');
      refreshUsers();
    } catch (err) {
      alert('Failed to add user');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new user name"
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Add User</button>
    </div>
  );
}