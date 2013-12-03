/**
 * Created by Joe on 10/23/13.
 */
var SubmissionHandler = require('../handlers/SubmissionHandler');
var express = require('express');
module.exports = exports = function(app, db, dirname) {
    var submissionHandler = new SubmissionHandler(db);
    app.get('/GetSubmissions',submissionHandler.GetAllOpenSubmissions);


    console.log(dirname);
    app.get('*', function(req, res){
        return res.send('Page Not Found', 404);
    });
}
