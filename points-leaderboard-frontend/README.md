# Points Claim System — Frontend (React + Vite)

This is the **frontend** for the Points Claim System assignment built with **React + Vite**.  
Users can be added, random points can be claimed, and a live leaderboard + claim history are shown.

---

## Features

- Add new users to the system
- Claim random points (1–10) for a selected user
- Real-time leaderboard updates
- View claim history dynamically
- Clean and responsive UI using CSS

---

## Tech Stack

- React (Vite)
- Axios
- Custom CSS (`common.css`)
- Deployed on **Netlify**

---

## Local Setup

```bash
cd points-leaderboard-frontend
npm install
npm run dev

Then open your browser at:
http://localhost:5173

## Folder Structure

src/
├── components/
│   ├── AddUser.jsx
│   ├── ClaimHistory.jsx
│   ├── Leaderboard.jsx
│   └── UserSelector.jsx
├── App.jsx
├── main.jsx
└── common.css


## Backend API (Connected)
This app connects to the following backend API endpoints:

Method	       Route	      Description
GET	          /users	  Get leaderboard users
POST	      /users	     Add a new user
POST	/claims/:userId	  Claim random points
GET	    /claims/history	   Fetch claim  history


##  Deployed Frontend (Netlify)
https://symphonious-pastelito-72fad9.netlify.app/


## Developed By
Abhinay Mesipogu
This project is part of the Full Stack Assignment for 3W Business Private Limited