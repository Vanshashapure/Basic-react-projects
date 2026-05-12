# ❤️ LikeButton — React Component

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.x-528DD7?style=flat&logo=fontawesome&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

A minimal React toggle button that switches between a **liked** and **unliked** heart icon using Font Awesome — built with `useState` hook.

---

## ✨ Demo

| Unliked | Liked |
|--------|-------|
| 🤍 outline heart | ❤️ solid heart |

> Click the heart → it toggles!

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=16`
- React `>=18`

### 1. Clone the repo

```bash
git clone https://github.com/your-username/like-button.git
cd like-button
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add Font Awesome

**Option A — CDN** (add to `index.html`):

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
```

**Option B — npm**:

```bash
npm install @fortawesome/fontawesome-free
```

Then in `main.jsx` or `index.js`:

```js
import "@fortawesome/fontawesome-free/css/all.min.css";
```

### 4. Run the app

```bash
npm run dev
```

---

## 🧩 Usage

```jsx
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div>
      <LikeButton />
    </div>
  );
}
```

---

## 📄 Component Code

```jsx
import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
```

---

## 🛠️ How It Works

| Code | What it does |
|------|--------------|
| `useState(false)` | Default state is **unliked** |
| `toggleLike()` | Flips `isLiked` on every click |
| `fa-solid fa-heart` | Filled heart — shown when **liked** |
| `fa-regular fa-heart` | Outline heart — shown when **not liked** |
| `onClick` on `<p>` | Listens for user click to trigger toggle |

---

## 📁 Project Structure

```
src/
└── components/
    └── LikeButton.jsx
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.x | UI library |
| Font Awesome | ^6.x | Heart icons |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📝 License

[MIT](LICENSE)

---

> Made with ❤️ using React

