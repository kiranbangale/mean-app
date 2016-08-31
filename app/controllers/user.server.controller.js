(function() {
    'use strict';

    var User = require('mongoose').model('User');

    module.exports.create = function(req, res, nxt) {

        var user = new User(req.body);
        user.save(function(err) {
            if (err) {
                return nxt(err);
            } else {
                res.json(user);
            }
        });

    };

    module.exports.list = function(req, res, nxt) {

        User.find({}, function(err, users) {
            if (err) {
                return nxt(err);
            } else {
                res.json(users);
            }
        });

    };

    module.exports.read = function(req, res) {
        res.json(req.user);
    };

    module.exports.userByID = function(req, res, nxt, id) {

        User.findOne({
            _id: id
        }, function(err, user) {
            if (err) {
                return nxt(err);
            } else {
                req.user = user;
                nxt();
            }
        });

    };

    module.exports.update = function(req, res, nxt) {

        User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
            if (err) {
                return nxt(err);
            } else {
                res.json(user);
            }
        });

    };

    module.exports.delete = function(req, res, nxt) {
        req.user.remove(function(err) {
            if (err) {
                return nxt(err);
            } else {
                res.json(req.user);
            }
        });
    };

}());
