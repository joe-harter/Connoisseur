/**
 * Created by Joe on 10/1/13.
 */

var app = angular.module('connoisseur', ['ui.bootstrap']);

app.controller('Router', function($scope, $window, $location, $http) {
    $scope.currentSubmissions = 'Views/CurrentSubmission.html';

});

app.controller('SubmissionCtrl', function($scope, $http) {
    var httpRequest = $http.get('http://localhost:8080/GetSubmissions').success(function(data, status) {
        data.forEach(function(submission) {
            addFormattedDate(submission);
        });
        $scope.submissions = data;
    });

    this.addFormattedDate = function(submission)
    {
        submission.SubmittedOnDate = new Date(submission.SubmittedOn);
        submission.FormattedSubmittedOn = submission.SubmittedOnDate.getUTCFullYear() +"/"+
            ("0" + (submission.SubmittedOnDate.getUTCMonth()+1)).slice(-2) +"/"+
            ("0" + submission.SubmittedOnDate.getUTCDate()).slice(-2) + " " +
            ("0" + submission.SubmittedOnDate.getUTCHours()).slice(-2) + ":" +
            ("0" + submission.SubmittedOnDate.getUTCMinutes()).slice(-2) + ":" +
            ("0" + submission.SubmittedOnDate.getUTCSeconds()).slice(-2);
    }

});
