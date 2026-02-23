import express from 'express';

const app = express();

// app.get('/',(req, res)=>{
//     res.send("server is ready ")
// })

app.get('/api/jokes', (req,res)=>{
    const jokes =[
        {
            id: 1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'B joke',
            content: 'this is a joke'
        },
        {
            id: 3,
            title: 'C joke',
            content: 'this is a joke'
        },
        {
            id: 4,
            title: 'D joke',
            content: 'this is a joke'
        },
        {
            id: 5,
            title: ' F joke',
            content: 'this is a joke'
        }
    ]
    res.json({jokes});
})

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
