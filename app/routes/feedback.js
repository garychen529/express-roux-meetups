"use strict";

const router = require('express').Router();

router.get('/feedback', function(req, res) {
    res.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'feedback'
    });
});

module.exports = router;