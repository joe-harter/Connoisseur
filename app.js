/**
 * Created by Joe on 10/1/13.
 */

var app = angular.module('app', ['ui.bootstrap']);

var submissions = [{SubmittedBy: "Joe Harter", SubmittedOn: "9/14/2013 11:30 AM"},
                   {SubmittedBy: "Dimitris Zarkadoulas", SubmittedOn: "9/14/2013 11:37 AM"}];


app.controller('Router', function($scope, $window, $location, $http) {
    $scope.main = 'Views/CurrentSubmission.html';

});

app.controller('SubmissionCtrl', function($scope, $http) {
    var httpRequest = $http.get('http://localhost:8080/GetSubmissions').success(function(data, status) {
        data.forEach(function(submission) {
            submission.SubmittedOnDate = new Date(submission.SubmittedOn);
            submission.FormattedSubmittedOn = submission.SubmittedOnDate.getUTCFullYear() +"/"+
                    ("0" + (submission.SubmittedOnDate.getUTCMonth()+1)).slice(-2) +"/"+
                    ("0" + submission.SubmittedOnDate.getUTCDate()).slice(-2) + " " +
                    ("0" + submission.SubmittedOnDate.getUTCHours()).slice(-2) + ":" +
                    ("0" + submission.SubmittedOnDate.getUTCMinutes()).slice(-2) + ":" +
                    ("0" + submission.SubmittedOnDate.getUTCSeconds()).slice(-2);
        });
        $scope.submissions = data;
    });


});
