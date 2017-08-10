(function () {
    angular.module("WebGallery")
        .factory("MemberService", function ($http) {
            return {
                getMembers: function () {
                    return $http.get("data.json").then(function (result) {
                        return result;
                    })
                }
            }
        })
})();