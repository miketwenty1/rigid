var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('dlogin', {
        title: 'doctor login'});
});

module.exports = router;