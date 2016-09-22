var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'); // allows connection to mongo

//GET

router.route('/')
  //GET all articles
    .get(function (req, res, next) {
        mongoose.model('Article').find({}, function(err, articles){
            if (err) {
                console.log(err);
            } else {
                res.format({
                    html: function(){
                        res.render('articles', {
                            title: 'Index of All Articles',
                            'articles': articles
                        });
                    }
                });
            }
        });
    })
module.exports = router;
