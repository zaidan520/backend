import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [type, settype] = useState("")
  const [Setup, setSetup] = useState("")
  const [punchline, setpunchline] = useState("")

  // const joke = async ()=>{
  //   try {
  //     const response = await fetch('http://localhost:3000/api/joke')
  //     const data = await response.json();

  //     settype(data.type)
  //     setSetup(data.setup)
  //     setpunchline(data.punchline)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // 2nd Method
  const joke = ()=>{
    axios.get('/api/joke')
    .then((response)=>{
      settype(response.data.type)
      setSetup(response.data.setup)
      setpunchline(response.data.punchline)
       localStorage.setItem("lastJoke", JSON.stringify(response.data))
    })
    
    .catch((error)=>{
      console.log(error)
    })
  }

  
  return (
  <>
  <div>
  <h1>A JOKE GENERATOR!!!</h1>
  <button onClick={joke}>Get Joke</button>
  <h2>Joke!: {Setup}</h2>
  <p>Joke type: {type}</p>
  <p>punchline: {punchline}</p>
  </div>
  </>
  )
}

export default App
