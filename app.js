/**
 * Created by Joe on 10/1/13.
 */

var app = angular.module('connoisseur', ['ui.bootstrap']);

app.controller('Router', function($scope, $window, $location, $http) {
    $scope.currentSubmissions = 'Views/CurrentSubmission.html';

});

app.controller('SubmissionCtrl', function($scope, $modal, $http) {

    var modalInstance = $modal.open({
        templateUrl: 'views/ProfileModal.html',
        controller: ModalInstanceCtrl,
        resolve: {
            items: function () {
                return 0;
            }
        }
    });
debugger
    modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
    });

    var httpRequest = $http.get('http://localhost:8080/GetSubmissions').success(function(data, status) {
        data.forEach(function(submission) {

            addFormattedDate(submission);
        });
        $scope.submissions = data;
    });
});

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};