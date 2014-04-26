 
		

'use strict';
	

var app = angular.module('app', ['ngSanitize', 'ngRoute']);

	
app.config(['$locationProvider', function($location) 
						{	
							$location.hashPrefix('!');
						}
					]);		
					
app.config(['$routeProvider', function ($routeProvider) 
				{
					$routeProvider.
						when('/', { templateUrl: function () {  					}  }). 
						when('/doc/:projectId', 
								{		 
									templateUrl: function (params) {  					}
									 
										
									
								}
								
							)
					.otherwise({ redirectTo: '/' });
				}
			]);	




	
					

 	
  

	