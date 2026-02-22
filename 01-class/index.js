require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const github = {
    name: ali,
    class: BSSE,
    roll_No: 178
}


app.get('/', (req, res)=>{
    res.send("hello backend!")
})
app.get('/twitter', (req,res)=>{
    res.send("alizaidan")
})
app.get('/login', (req, res)=>{
    res.send('<h1>plz login at app</h1>')
})

app.get('/youtube', (req, res)=>{
     res.send("<input type='text' placeholder='name'>")
})
app.get('/data', (req, res)=>{
    res.json(github)
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})