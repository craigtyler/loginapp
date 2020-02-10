const express = require('express');
const router = express.Router();
const path = require('path');

//get for the login page
router.get('/', function(req, res) { 
    res.sendFile('/webpages/login.html', {root: path.resolve('./')});
});

router.use(express.static('public/login'));

//post for the login page, (submitting the login form)
router.post('/', function(req, res) { 
    console.log(req.body);
    res.redirect('/')
})

module.exports = router