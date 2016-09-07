var express = require('express');
var router = express.Router();

var email = 'mikemuellerware@gmail.com';
var subject = '?Subject=Blog%20Site%20Reader'
var mailtoemail = 'mailto:' + email + subject;


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Node Blog' });
});

router.get('/about', function(req, res, next) {
    res.render('about', {title: 'About'});
})

router.get('/contact', function(req, res, next) {
    res.render('contact', {title: 'Contact',
        email: email,
        mailtoemail: mailtoemail });
})

module.exports = router;
