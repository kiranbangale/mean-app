(function() {
    'use strict';

    module.exports.render = function(req, res) {

        if (req.session.lastVisit) {
            console.log('session.lastVisit: ', req.session.lastVisit);
        }

        req.session.lastVisit = new Date();

        res.render('index', {
            title: 'Kantar'
        });
    };

}());
