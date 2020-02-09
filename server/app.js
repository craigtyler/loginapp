const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//the object that we tell where our URLs go. 
//index/about.html | index/login.html etc.
app.use(express.urlencoded({ extended: true }))

var router = express.Router();

router.get('/', (req,res) => res.sendFile(path.resolve('./client/index.html')));

/*
app.route('/login').get(function(req,res) { res.sendFile(path.resolve('./client/login.html'));
    }).post(function(req,res) {
        console.log('processing');
        res.send(res.sendFile(path.resolve('./client/index.html')));
    })

*/

router.get('/login', function(req, res) { 
    res.sendFile(path.resolve('./client/login.html'));
});

router.post('/login', function(req, res) { 
    console.log(req.body);
    res.redirect('/')
})

app.use('/', router);

app.listen(port, console.log(`app running on port ${port}`));
