/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

angular.module('myApp',[]).config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);


data_support.ready(intel.xdk.services.parkWhizsearch.bind(null, {"sort":"distance","xdkFilter":null}));
/*data_support.ready(intel.xdk.services.noObject.bind(null, {"destination":"350 5th Ave, New York, NY 10118","sort":"distance","xdkFilter":null}));*/

/*angular.module('myApp',[]).config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();
}]);


data_support.ready(intel.xdk.services.parkWhizsearch.bind(null, {"xdkFilter":null}));*/