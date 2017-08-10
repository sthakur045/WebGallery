(function () {
    angular.module("WebGallery")
        .controller("MemberController", function ($scope, MemberService) {
            $scope.members = MemberService.getMembers().then(function (result) {
                $scope.members = result.data;
            })
        });
})();