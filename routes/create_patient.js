var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('create_patient_page', {
        title: 'create patient'});
});

module.exports = router;