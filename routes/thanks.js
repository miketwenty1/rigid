var express = require('express');
var router = express.Router();
var fs = require('fs');
var secret = JSON.parse(fs.readFileSync('./.secrets.json', 'utf8'));
var hashclient = require('hashapi-lib-node');
var tierion_username = secret.tierion_username;
var tierion_password = secret.tierion_password;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('thanks', {
        title: 'na'});


    var hashClient = new hashclient();

    hashClient.authenticate(username, password, function(err, authToken){
        if(err) {
            console.log("FAILED TO AUTH");
        } else {
            console.log("WHOO!!");
            // authentication was successful
            // access_token, refresh_token are returned in authToken
            // authToken values are saved internally and managed autmatically for the life of the HashClient
        }
    });

});

module.exports = router;