/**
 * Created by Joe on 12/4/13.
 */

var addFormattedDate = function(submission)
{
    submission.SubmittedOnDate = new Date(submission.SubmittedOn);
    submission.FormattedSubmittedOn = submission.SubmittedOnDate.getUTCFullYear() +"/"+
        ("0" + (submission.SubmittedOnDate.getUTCMonth()+1)).slice(-2) +"/"+
        ("0" + submission.SubmittedOnDate.getUTCDate()).slice(-2) + " " +
        ("0" + submission.SubmittedOnDate.getUTCHours()).slice(-2) + ":" +
        ("0" + submission.SubmittedOnDate.getUTCMinutes()).slice(-2) + ":" +
        ("0" + submission.SubmittedOnDate.getUTCSeconds()).slice(-2);
};