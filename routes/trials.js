var express = require('express');
var nats = require('nats').connect();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('trials_view', {
        title: 'add trial please'});
    nats.subscribe('foo', function(msg) {
        console.log('Received a message: ' + msg);
        nats.close();
    });
});

module.exports = router;