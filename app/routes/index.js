"use strict";

const router = require('express').Router();

router.get('/', function(req, res) {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    data.speakers.forEach(function(speaker) {
        pagePhotos = pagePhotos.concat(speaker.artwork);
    });
    
    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'home'
    });
});

module.exports = router;