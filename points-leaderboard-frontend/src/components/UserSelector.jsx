import React from 'react';

export default function UserSelector({ users, selectedUserId, setSelectedUserId }) {
  return (
    <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}