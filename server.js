'use strict';

var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    bodyParser = require('body-parser'),
    db = require('./config/db'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, function (err, database) {
    console.log('DATABASE ' + database);
    if (err) {
        return console.log('!!!!!!!' + err);
    }
    require('./app/routes')(app, database);
});

app.listen(3000);
console.log('Server running to 3000');
