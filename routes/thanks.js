var express = require('express');
var router = express.Router();
var hashclient = require('hashapi-lib-node');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('thanks', {
        title: 'na'});

    var username = secret.tierion_username;
    var password = secret.tierion_password;
    //var hashClient = new hashclient();

    /*hashClient.authenticate(username, password, function(err, authToken){
        if(err) {
            console.log("FAILED TO AUTH");
        } else {
            console.log("WHOO!!");
            // authentication was successful
            // access_token, refresh_token are returned in authToken
            // authToken values are saved internally and managed autmatically for the life of the HashClient
        }
    });*/


});

module.exports = router;