const express = require('express');
const router = express.Router();
const path = require('path');

//get for the login page
router.get('/', function(req, res) { 
    res.sendFile('./login.html', {root: path.resolve('routes/login/')});
});

router.use(express.static(path.join(__dirname, '/public')))

console.log(path.join(__dirname, '/public'));

//post for the login page, (submitting the login form)
router.post('/', function(req, res) { 
    console.log(req.body);
    res.redirect('/')
})

module.exports = router