import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import UserSelector from './components/UserSelector';
import Leaderboard from './components/Leaderboard';
import AddUser from './components/AddUser';
import ClaimHistory from './components/ClaimHistory';
import './components/common.css';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [lastClaimMsg, setLastClaimMsg] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchUsers = useCallback(async () => {
    const res = await axios.get(`${API_BASE}/users`);
    setUsers(res.data);
  }, []);

  const fetchHistory = useCallback(async () => {
    const res = await axios.get(`${API_BASE}/claims/history`);
    setHistory(res.data);
  }, []);

  const handleClaim = async () => {
    if (!selectedUserId) {
      alert('Select a user first');
      return;
    }

    const res = await axios.post(`${API_BASE}/claims/${selectedUserId}`);
    setLastClaimMsg(res.data.message);
    await fetchUsers();
    if (showHistory) await fetchHistory();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (showHistory) fetchHistory();
  }, [showHistory, fetchHistory]);

  return (
    <div className="app-container">
      <h1>Points Claim System</h1>

      <div className="controls">
        <UserSelector
          users={users}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
        <button onClick={handleClaim}>Claim Points</button>
      </div>

      {lastClaimMsg && (
        <p style={{ color: 'green', marginBottom: '12px' }}>{lastClaimMsg}</p>
      )}

      <AddUser refreshUsers={fetchUsers} />
      <Leaderboard users={users} />

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setShowHistory(!showHistory)}>
          {showHistory ? 'Hide' : 'Show'} Claim History
        </button>
        {showHistory && <ClaimHistory history={history} />}
      </div>
    </div>
  );
}

export default App;