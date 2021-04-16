(function () {
	// body...
 'use strict';
 angular.module('myfirstapp',[])

 .controller('Mycontroller', function($scope){

    $scope.name ="";
    $scope.totalValue=0;

    $scope.display = function() {
    	var total= calculate($scope.name);
    	$scope.totalValue=total;
    };
    function calculate(string){
    	var v=0;
    	for(var i=0;i<string.length;i++){
    		v+=string.charCodeAt(i);
    	}
    	return v;
    }

 });

})();

