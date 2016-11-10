"use strict";

const express = require('express');
const app = express();
const dataFile = require('./data/data.json');
const reload = require('reload');
const io = require('socket.io')();

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/speakers.js'));
app.use(require('./routes/feedback.js'));
app.use(require('./routes/api.js'));
app.use(require('./routes/chat.js'));

const server = app.listen(app.get('port'), function() {
    console.log("listening on port", app.get('port'));
});

io.attach(server);
io.on('connection', function(socket) {
    socket.on('postMessage', function(data) {
        io.emit('updateMessages', data);
    });
});

reload(server, app);