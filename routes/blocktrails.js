var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('blocktrails', {
        title: 'blocktrails'});
});

module.exports = router;