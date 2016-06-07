(function(){
	'use strict';

	var myCtrl = function($scope, IMoove2TestService) {
		IMoove2TestService.getData().then(function(response) {
			$scope.response = response;
		});
		$scope.myModels = '';
		$scope.myFunc = function () {
			IMoove2TestService.putData($scope.myModels);
			$scope.response.push({'data':$scope.myModels});
			$scope.myModels = '';
		};
	};

	angular.module('mean.meanStarter').controller('myCtrl', myCtrl);

	myCtrl.$inject = ['$scope', 'IMoove2TestService'];
}
)();