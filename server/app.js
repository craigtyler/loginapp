require('dotenv').config();

const express = require('express');
const login = require('../client/login');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const url = 'mongodb://127.0.0.1:27017/users';
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});

const db = mongoose.connection
db.once('open', _ =>{
    console.log('db connected', url)
})
db.on('error',err => {
    console.error('connection error:' , err)
})


//const port = process.env.PORT;
//the object that we tell where our URLs go. 
//index/about.html | index/login.html etc.
app.use(express.urlencoded({ extended: true }))

var router = express.Router();

//get for the homepage.
router.get('/', (req,res) => res.sendFile(path.resolve('./webpages/index.html')));

router.use('/login', login);

router.use(express.static('public'));

app.use('/', router);


app.listen(3000, console.log(`app running on port ${3000}`));
