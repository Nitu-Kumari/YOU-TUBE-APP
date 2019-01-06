const express = require('express');
const Controller=require('./Controller');

const app = express();

app.use(express.static('public'));

app.get('/home',Controller.getAllHome);

app.listen(8080,()=>console.log('sever started'));