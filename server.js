(function() {
    'use strict';

    process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    var mongoose = require('./config/mongoose'),
        express = require('./config/express'),
        passport = require('./config/passport'),

        db = mongoose(),
        app = express(),
        passport = passport();

    app.listen(3800);

    module.exports = app;

    console.log('listening at port: 3800');

}());
