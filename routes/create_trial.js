var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


    res.render('create_trials_view', {
        title: 'Trial'});
});

module.exports = router;