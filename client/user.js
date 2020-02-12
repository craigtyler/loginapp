const express = require('express');
const router = express.Router();
const path = require('path');

//get for the login page
router.get('/', function(req, res) { 

    //need cookies and caching currently logged in users.

    res.sendFile('/webpages/user.html', {root: path.resolve('./')});
});

module.exports = router