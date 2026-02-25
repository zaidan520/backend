# 😂 Joke Generator App (MERN Style Mini Project)

A simple full-stack project that fetches random jokes from a public API using a custom backend server and displays them in a React frontend.

This project demonstrates:

* Backend API creation using Express
* Fetching data from external APIs
* Creating custom endpoints
* Connecting React frontend with backend
* Using Axios for HTTP requests
* Using Proxy to avoid CORS issues

---

## 🚀 Tech Stack

### Backend

* Node.js
* Express.js
* CORS
* Native Fetch API

### Frontend

* React (Vite)
* Axios

### External API Used

* Official Joke API
  https://official-joke-api.appspot.com/random_joke

---

## 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── vite.config.js
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup

### 1️⃣ Go to backend folder

```bash
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install express cors
```

### 3️⃣ Run the server

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

### Backend Routes

| Route       | Method | Description                         |
| ----------- | ------ | ----------------------------------- |
| `/`         | GET    | Check if server is running          |
| `/api/joke` | GET    | Fetch random joke from external API |

---

## 💻 Frontend Setup

### 1️⃣ Go to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
npm install axios
```

### 3️⃣ Configure Proxy (vite.config.js)

```js
server: {
  proxy: {
    '/api': 'http://localhost:3000',
  }
}
```

### 4️⃣ Start frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔄 How It Works

1. User clicks "Get Joke" button.
2. React sends request to:

   ```
   /api/joke
   ```
3. Backend receives request.
4. Backend fetches joke from external API.
5. Backend sends joke to frontend.
6. Frontend displays setup and punchline.

---

## 📌 Example Backend Code (Core Logic)

```js
app.get('/api/joke', async (req, res) => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" })
  }
})
```

---

## 🎯 Features

* Custom Express API endpoint
* External API integration
* Axios request handling
* Proxy configuration
* Clean component structure
* Beginner-friendly full-stack example

---

## 🧠 Learning Outcomes

* How backend and frontend communicate
* Why we use proxy instead of calling external API directly
* How to structure full-stack projects
* Handling async/await in Express
* Using Axios in React

---

## 🔮 Future Improvements

* Add loading spinner
* Add error handling UI
* Add joke categories
* Add joke history
* Deploy backend and frontend

---

## 👨‍💻 Author

Ali Zaidan
Computer Science Student
Learning Full Stack Development 🚀

---

## ⭐ If you like this project

Give it a star on GitHub!

---
