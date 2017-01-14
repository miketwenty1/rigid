var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('Tierion', {
        title: 'tierion'});
});

module.exports = router;