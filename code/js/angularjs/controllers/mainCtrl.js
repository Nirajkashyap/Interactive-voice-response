 
		



			
 
app.controller('mainController', function($scope,$location,$rootScope ,$http)
	{
		//	$scope.currentpage = "index2.html";
			 
			
			
			$("#bodyeditormaster").hide();
			
			$scope.ckeditorvalueoff = false;
			$scope.current = {};
			$scope.entitydel = "";	
			
			 $scope.items = [ { id : 65576770464026000000 , date : Date.now(), body : "<p>cas<em>da</em>sdfsdfsd0000</p>", viewcount : 1 }];
		
		
			$scope.browsepushflag = 1;	
			$scope.maintainindex = -1;
		
			$scope.browsinghistory = [];
			
			$scope.addItem = function () 
								{
									//console.log($rootScope.currentpage);
									console.log("firereerer");
									var id = Math.random() * 100000000000000000000;
									temp = { id : id ,  date : Date.now(), body : "<p>cas<em>da</em>sdfsdfsd0000</p>", viewcount : 0  };	
								
									 $scope.items.push(temp);
									
								};
			 
				
				
			$scope.viewItem = function (id,abc) 
					{
						 
						
							
							for(i in $scope.items) 
								{
									if($scope.items[i].id == id) 
									{

										$scope.items[i].viewcount =  $scope.items[i].viewcount + 1 ;
										if( $scope.items[i].viewcount > $scope.viewcountmaxindex )
										{
										$scope.viewcountmaxindex = $scope.items[i].viewcount;
										}
										$scope.current = $scope.items[i];
										console.log($scope.current);
										if(abc == 0)
										{
										console.log('we are upating index');
										$scope.maintainindex =  -1; 
										}
										else if (abc == 1)
										{
										
										
										}
										
										//console.log('fn is called');
									}
								}
							
						 
					}
				
			$scope.delete1 = function(id,flag) 
					{
					if(flag == 0 )
					{
					$('#myModal').modal('show')
					//$('#entitydel').html(id);
					$scope.entitydel = id;
					//console.log(id);
					}
					else if(flag == 1)
					{
						//id = $('#entitydel').html();
						id = $scope.entitydel;
						console.log("to be del is " + id);
						for(i in $scope.items) 
						{
							
							
							if($scope.items[i].id == id) 
							{
									$scope.items.splice(i,1);
									$scope.viewcountmaxindex =  0; 
									console.log('del suc');
							}
						}
					
						/*console.log(id);
						console.log('enter to delete');
							 
									console.log($scope.items[id].id);
											if($scope.items[id].id == id) 
												{
													//$scope.items.remove(id);
														delete $scope.items[id];						
													
													console.log($scope.items);
													//$scope.current = {};	
													}
								 
					*/
					}
					else{}
					
					};
					
					
					 
				
				
				
			$scope.$on('$routeChangeSuccess', function (scope, next, current)
							{
								
								
								
								
								
								//$rootScope.currentpage = "index2.html";
					

				
								if($scope.browsepushflag == 1)
									{
										$scope.viewItem(next.params.projectId,0);
										$scope.browsinghistory.push($location.path());
									}
								else
									{
										$scope.viewItem(next.params.projectId,1);
										$scope.browsepushflag = 1;	
									}
								 console.log($scope.browsinghistory);
							});	 
							
						
			$scope.browsenext  = function () 
									{
										console.log("next");
										console.log($location.path());
										
										
									
										console.log("now we will try to search reveres from this in array " + $scope.maintainindex);
										var temp = $scope.browsinghistory.indexOf($location.path(),$scope.maintainindex - 1 ); 
										console.log('yes we found  ' +  $location.path() + ' at     ' + temp );
										$scope.maintainindex = temp;
										
										
										
										$scope.browsepushflag = 0;
										console.log($scope.browsepushflag);
										$location.path($scope.browsinghistory[temp + 1 ] );
											 
											
									} 
									
						
			$scope.browseprev  = function () 
									{
										console.log("Prv");
										
											console.log($scope.browsinghistory);
										console.log("now we will try to search reveres from this in array " + $scope.maintainindex);
										if($scope.maintainindex == -1) 
										{
										var temp = $scope.browsinghistory.lastIndexOf($location.path(),$scope.maintainindex  ); 
										}
										else
										{
										var temp = $scope.browsinghistory.lastIndexOf($location.path(),$scope.maintainindex + 1  );
										}
										console.log('yes we found  ' +  $location.path() + ' at     ' + temp );
										$scope.maintainindex = temp;
										
										$scope.browsepushflag = 0;
										console.log($scope.browsepushflag);
										$location.path($scope.browsinghistory[temp - 1 ] );
										
									} 
								 
						 
			$scope.ckeditoron   = function () 
									{
										console.log($scope.ckeditorvalueoff);
										$scope.ckeditorvalueoff = true;
										
										console.log($scope.ckeditorvalueoff);
											$("#ckeditoronid").hide();
											$("#bodyeditormaster").show();
									
										
									}
									
			$scope.ckeditoroff   = function () 
									{
	
									
					 					
					$http({url:"http://127.0.0.1:8000/signup/process", headers: {'Content-Type': 'application/x-www-form-urlencoded' }, method:"POST",  data :{ 'id' : "ghghgh" , 'htmlvalue' : "xxx" } })

								.success(function(data)
									{
									console.log(data);
									})
								.error(function(data, status, headers, config) 
								{
									console.log('HTTP ERRORS.........................');
									//console.log(data);

								});
									
							 	
									console.log($scope.current );
											$("#ckeditoronid").show();
											$("#bodyeditormaster").hide();
									
										
									}
			


			$scope.viewcountmaxindex =  0; 
			$scope.viewcountfilter = function ( item ) 
									{
									return (item.viewcount >= $scope.viewcountmaxindex  || item.viewcount >= $scope.viewcountmaxindex - 1 || item.viewcount >= $scope.viewcountmaxindex - 2 || item.viewcount == 0);
									 
								 }
								 
		
				 
  			
					
	});
	 	

