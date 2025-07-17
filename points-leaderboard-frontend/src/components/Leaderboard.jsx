import React from 'react';

export default function Leaderboard({ users }) {
  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <ol>
        {users.map((user, index) => (
          <li key={user._id}>
            {user.name} — {user.points} pts (Rank {index + 1})
          </li>
        ))}
      </ol>
    </div>
  );
}