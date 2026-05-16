
# 🎰 Lottery Game

A simple and fun lottery game built with **React** where players try to match a target sum by buying random tickets.

---

## 🎮 How It Works

- Each ticket contains **n random digits**
- If the **sum of the digits** equals the **winning sum**, you win!
- Click **"Buy New Ticket"** to generate a new ticket and try again

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/lottery-game.git
cd lottery-game
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── LotteryGame.jsx   # Main game component
│   └── Ticket.jsx        # Ticket display component
├── helper.js             # genTicket() and sum() utilities
└── App.jsx
```

---

## ⚙️ Props

`LotteryGame` accepts the following props:

| Prop         | Type     | Default | Description                          |
|--------------|----------|---------|--------------------------------------|
| `n`          | `number` | `3`     | Number of digits on each ticket      |
| `winningSum` | `number` | `15`    | Target sum to win the game           |

---

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Build tool (recommended)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
