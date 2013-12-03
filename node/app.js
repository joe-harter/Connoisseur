/**
 * Created by Joe on 10/20/13.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    routes = require('./routes'); // Routes for our application
    MongoClient = require('mongodb').MongoClient;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/IHeartReviewing', function(err, db) {
    if(err) throw err;
    app.use(express.static(__dirname + '/../'));
    routes(app, db, __dirname);

    app.listen(8080);
    console.log('Express server started on port 8080');
 });