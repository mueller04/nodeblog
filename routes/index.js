var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Node Blog' });
});

router.get('/about', function(req, res, next) {
    res.render('about', {title: 'About'});
})

router.get('/contact', function(req, res, next) {
    res.render('contact', {title: 'Contact', email: 'mikemuellerware@gmail.com'});
})

module.exports = router;
