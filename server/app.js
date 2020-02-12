require('dotenv').config();

const express = require('express');
const login = require('../client/login');
const user = require('../client/user');
const logger = require('morgan');
const app = express();
const path = require('path');

//!COOKIE STUFF


const port = process.env.PORT;
//the object that we tell where our URLs go. 
//index/about.html | index/login.html etc.
app.use(express.urlencoded({ extended: true }))

var router = express.Router();

//get for the homepage.
router.get('/', function(req,res) {
    res.sendFile(path.resolve('./webpages/index.html'))
    req.session.name;
});

router.use('/login', login);
router.use('/user', user);

router.use(express.static('public'));

app.use(logger('dev'));





app.use('/', router);

app.listen(port, console.log(`app running on port ${port}`));
