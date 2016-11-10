"use strict";

const router = require('express').Router();

router.get('/chat', function(req, res) {
    res.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat'
    });
});

module.exports = router;