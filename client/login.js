const express = require('express');
const router = express.Router();
const path = require('path');

const mongo = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/siteusers';

//get for the login page
router.get('/', function(req, res) { 
    res.sendFile('/webpages/login.html', {root: path.resolve('./')});
});

router.use(express.static('public/login'));


//post for the login page, (submitting the login form)
router.post('/', function(req, res) {

    var iUserName = req.body.userName;
    var iPassWord = req.body.passWord;

    mongo.connect(url,{useUnifiedTopology:true, useNewUrlParser:true},function(err,db) {

        db.db().collection('users').find().toArray(function(err,rep){
          
            var validated = false;

            rep.every(function(item,index){
                if(iUserName == item.userName && !validated)
                {
                    console.log('username same')
                    if(iPassWord == item.passWord & !validated)
                    {
                        console.log('password same')
                        validated = true;
                    }
                    else
                    {
                        console.log('password wrong')
                    }
                }
                else{
                    console.log('username wrong')
                }
                if(validated){
                    res.redirect('/user')
                    return false; 
                }
                else return true;
            })
        })
    })
})
module.exports = router