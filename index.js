const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const topics = require('./data/topics.json')

app.get('/', (req,res)=>{
    res.send('api running smoothyly')
})

app.get('/topic', (req,res)=>{
    res.send(topics)
})

app.get('/topic/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const singleData = topics.find(single => single.id == id) || {};
    res.send(singleData)
    console.log(singleData)
})

app.listen(port, ()=>{
    console.log('server is running on', port)
})