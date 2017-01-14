var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('create patient', {
        title: 'create patient'});
});

module.exports = router;