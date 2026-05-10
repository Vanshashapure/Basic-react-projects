# 🎲 Ludo Move Tracker - React

A React app to track moves for all 4 Ludo players in real time.

## 🚀 Setup
```bash
npm install
npm run dev
```

## ✨ Features
- Track moves for Blue, Green, Red, Yellow players
- Real-time updates using useState
- Single state object for all players

## 🛠️ Tech
- React 18
- useState Hook
- Vite

## 📖 How It Works
Single useState object tracks all 4 player moves. Each button click uses spread operator to update only that player's count without affecting others.
