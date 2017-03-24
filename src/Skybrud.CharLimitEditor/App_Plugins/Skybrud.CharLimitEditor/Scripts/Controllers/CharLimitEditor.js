angular.module('umbraco').controller('Skybrud.CharLimitEditorController', function ($scope, localizationService) {
    
    // Initialize the configuration
    var limit = parseInt($scope.model.config.limit);
    $scope.model.config.multiline = $scope.model.config.multiline === '1' || $scope.model.config.multiline === true;
    $scope.model.config.enforce = $scope.model.config.enforce === '1' || $scope.model.config.enforce === true;



    $scope.limitChars = function () {
        if ($scope.model.value.length > limit && $scope.model.config.enforce) {
            $scope.info = 'You cannot write more than <strong class="negative">' + limit + '</strong> characters!';

            localizationService.localize('skyCharLimit_info3', [limit]).then(function (value) {
                $scope.info = value;
            });

            $scope.model.value = $scope.model.value.substr(0, limit);
        } else {
            var remaining = (limit - $scope.model.value.length);
            if ($scope.model.value.length > limit) {
                localizationService.localize('skyCharLimit_info2', [remaining]).then(function (value) {
                    $scope.info = value;
                });
            } else {
                localizationService.localize('skyCharLimit_info1', [remaining]).then(function (value) {
                    $scope.info = value;
                });
            }
        }
    };

    $scope.limitChars();

});