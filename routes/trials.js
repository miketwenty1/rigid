var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('trials_view', {
        title: 'add trial please'});
});

module.exports = router;