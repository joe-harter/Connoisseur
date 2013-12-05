/**
 * Created by Joe on 12/3/13.
 */
describe('connoisseur', function () {
    beforeEach(module('connoisseur'));
    beforeEach(inject(function($rootScope) {
        $scope = $rootScope;
        $http = { get : function() { return { success: function() {}}}};
    }));

    describe('controller', function () {
        var ctrl, $http, $modal, $scope;


        beforeEach(inject(function($controller) {
            $modal = {};
            $http = { get : function() { return { success: function() {}}}};
            $modal.open = jasmine.createSpy('modal open').andReturn({ result : { then : function() {}}});
            ctrl = $controller('SubmissionCtrl', { $scope: $scope, $modal: $modal, $http: $http  });
        }));
        it('requires a profile cookie', function() {
            expect($modal.open).toHaveBeenCalled();
        });
    });

    describe('model submission', function() {
        it('canFormatDate', function() {
            var submission = { SubmittedOn: '2013-05-30T07:30:00.000Z'};
            addFormattedDate(submission);
            expect(submission.FormattedSubmittedOn).toEqual('2013/05/30 07:30:00');
        });
    });

    describe('modal controller', function() {
        beforeEach(inject(function($controller) {
            $http = { get : function() { return { success: function() {}}}};

            ctrl = $controller('SubmissionCtrl', { $scope: $scope, $modal: $modal, $http: $http  });
        }));
    });

});
