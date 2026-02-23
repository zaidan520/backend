import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

 useEffect(() => {
  axios.get('/api/jokes')
    .then((res) => {
      console.log('API RESPONSE:', res.data) // 👈 IMPORTANT
      setJokes(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}, [])

  return (
    <>
      <h1>chai aur code</h1>

      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App