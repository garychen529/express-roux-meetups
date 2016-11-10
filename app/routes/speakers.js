"use strict";

const router = require('express').Router();

router.get('/speakers', function(req, res) {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = data.speakers;

    data.speakers.forEach(function(speaker) {
        pagePhotos = pagePhotos.concat(speaker.artwork);
    });
    
    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerList'
    });
});

router.get('/speakers/:id', function(req, res) {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageSpeakers = [];

    data.speakers.forEach(function(speaker) {
        if (speaker.shortname == req.params.id) {
            pageSpeakers.push(speaker);
            pagePhotos = pagePhotos.concat(speaker.artwork);
        }
    });
    
    res.render('speakers', {
        pageTitle: 'Speaker Info',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakerDetail'
    });
});

module.exports = router;
