import React from 'react';

export default function ClaimHistory({ history }) {
  if (!history.length) return <p style={{ marginTop: 10 }}>No claims yet.</p>;

  return (
    <div>
      <h3 style={{ marginTop: 20 }}>Claim History</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
            <th>Claimed At</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h) => (
            <tr key={h._id}>
              <td>{h.userName}</td>
              <td>{h.pointsClaimed}</td>
              <td>{new Date(h.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}