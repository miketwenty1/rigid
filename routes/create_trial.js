var express = require('express');
var nats = require('nats').connect();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


    res.render('create_trials_view', {
        title: 'Trial'});
    nats.publish('foo', req.body);
    console.log("hello worldo");
    nats.close();
});

module.exports = router;