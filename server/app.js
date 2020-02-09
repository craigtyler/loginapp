const express = require('express');
const login = require('../routes/login/login');

const app = express();
const path = require('path');


const port = 3000;
//the object that we tell where our URLs go. 
//index/about.html | index/login.html etc.
app.use(express.urlencoded({ extended: true }))

var router = express.Router();

//get for the homepage.
router.get('/', (req,res) => res.sendFile(path.resolve('./routes/home/index.html')));

router.use('/login', login);

app.use('/', router);

app.listen(port, console.log(`app running on port ${port}`));
