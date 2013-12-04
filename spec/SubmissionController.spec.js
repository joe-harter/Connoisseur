/**
 * Created by Joe on 12/3/13.
 */
describe('app', function () {
    var $scope;
    beforeEach(module('connoisseur'));
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope;
    }));
    describe('controller', function () {
        var ctrl, $http;
        beforeEach(inject(function($controller) {
            $http = { get : function() { return { success: function() {}}}};
            ctrl = $controller('SubmissionCtrl', { $scope: $scope, $http: $http });
        }));

        it('hasFormattedDate', function() {
            var submission = { SubmittedOn: '2013-05-30T07:30:00.000Z'};
            ctrl.addFormattedDate(submission);
            expect(submission.FormattedSubmittedOn).toEqual('2013/05/30 07:30:00');
        });

        it('displays other user if claimed by them', function() {

        });
    });
});
