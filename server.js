(function() {
    'use strict';

    process.env.NODE_ENV = process.env.NODE_ENV || 'development';

    var express = require('./config/express'),
        app = express();

    app.listen(3800);

    module.exports = app;

    console.log('listening at port: 3800');

}());
