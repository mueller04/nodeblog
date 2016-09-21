var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), // allows connection to mongo
    bodyParser = require('body-parser'), //parses information from the POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

//GET

router.route('/')
  //GET all articles
    .get(function (req, res, next) {
        mongoose.model('Article').find({}, function(err, articles){
            console.log('are we here?')
            if (err) {
                console.log(err);
            } else {
                console.log('and this');
                console.log(articles);
                res.format({
                    html: function(){
                        console.log("we hrere");
                        console.log(articles);
                        res.render('articles', {
                            title: 'Index of All Articles',
                            'articles': articles
                        });
                    },
                    json: function(){
                        res.json(jsonFormat);
                    }
                });
            }
        });
    })
module.exports = router;
