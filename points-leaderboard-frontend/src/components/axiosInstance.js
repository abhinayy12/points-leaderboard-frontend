import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://points-leaderboard-backend.onrender.com', // ✅ Replace this
});

export default instance;
