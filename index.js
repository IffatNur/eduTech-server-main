const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/course.json');

app.use(cors());

app.get('/', (req,res)=>{
    res.send('edutech running');
})

app.get('/courses', (req,res) =>{
    res.send(courses);
})

app.get('/courses/:id', (req,res)=>{
    const id = req.params.id;
    const course = courses.find(crs => crs.id == id);
    res.send(course);
})

app.get('/checkout/:id', (req,res)=>{
    const id = req.params.id;
    const course = courses.find(crs => crs.id == id);
    res.send(course);
})

app.listen(port, ()=>{
    console.log('Edutech port: ', port);
})
