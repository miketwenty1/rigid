var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('test3', {
        title: 'na'});
});

module.exports = router;