var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('ind', {
        title: 'Individual record Query',
        name: ""});
});

module.exports = router;
