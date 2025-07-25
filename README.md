# 🎬 TMDB Movie Explorer

A full-stack movie catalog app built with **React**, **TypeScript**, **Firebase Authentication**, and **Express**, using data from **The Movie Database (TMDB)** API.

## ✨ Features

- 🔐 Protected routes with Firebase Authentication (Login/Register)
- 🎞️ List of popular movies from TMDB
- 🧑‍💼 Movie details page with title, director, and main actors
- 📦 Backend with Express for handling API calls to TMDB
- ⚛️ State management with React Context
- 🎨 Styled with Tailwind CSS
- 🔄 Routing with React Router v6
- 🔍 Search functionality (case-insensitive)
- 📁 Clean folder structure and reusable components

---

## 📁 Project Structure


```js
tmdb-movie-explorer/
├── 7-back-tmdb/ # Backend with Express and TMDB API
│ ├── controllers/
│ ├── .env
│ ├── index.js
│ └── ...
├── 7-front-tmdb/ # Frontend with Vite + React + TypeScript
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── context/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── types/
│ │ ├── utils/
│ │ └── App.tsx
│ ├── .env
│ └── ...
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- Firebase project (with Email/Password auth enabled)
- TMDB account and API key

---

### 1. Clone the repo

```bash
git clone https://github.com/justmove1987/7-tmdb-react-front-back.git
cd 7-tmdb-react-front-back
```
🔒 Auth Guard
Only registered users can access the movie list and details.
Unauthenticated users are redirected to the login page and sent back after successful login.

📦 Tech Stack
Frontend: React, TypeScript, Tailwind CSS, React Router, Firebase Auth

Backend: Express, Axios, Dotenv

API: TMDB (The Movie Database)


