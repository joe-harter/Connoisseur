/**
 * Created by Joe on 10/27/13.
 */

function SubmissionHandler (db) {
    "use strict";

    this.GetAllOpenSubmissions = function(req, res, next) {
        db.collection('submissions').find().toArray(function(err, submissions) {
            if(err) throw err;
            console.log(submissions);
            return res.send(submissions);
        });
    };

}

module.exports = SubmissionHandler;