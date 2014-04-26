; (function () {

    jsPlumb.ready(function () {

        // setup some defaults for jsPlumb.
        console.log("jsplumb is ready");
        

        jsPlumb.bind("connection", function(info)
			{
				console.log(info.sourceId);
				console.log(info.targetId);
				if(connectionflag == 0 )
				{						
										if(info.sourceId == info.targetId)
											{
											jsPlumb.detach(info);
											 var shortCutFunction = 'info';
												var msg = "Self connection is not allowed";
												var title = 'Disconnected';

												toastr.options = {
													'closeButton': 'true',
													debug: false,
													positionClass: 'toast-top-right',
													onclick: null
												};


												var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
												//  $toastlast = $toast;
												if ($toast.find('#okBtn').length) {
													$toast.delegate('#okBtn', 'click', function () {

														$toast.remove();
													});
												}
											}
											else
											{
														console.log(info.sourceId.substring(0,4));
									
															var res = info.sourceId.substring(0,4)
										
										
																if( res == "RIDN")
																{
																	if( info.targetId.substring(0,4) == "CURL" || info.targetId.substring(0,4) == "CFUN" )
																		{
																		console.log(info);
																		console.log(info.sourceEndpoint.connectorOverlays[0][1].label);
																		temp = { "sourceId" : info.sourceId , "targetId" : info.targetId , "label" : info.sourceEndpoint.connectorOverlays[0][1].label , "sourceenpointposx" : info.sourceEndpoint.anchor.x , "sourceenpointposy" : info.sourceEndpoint.anchor.y }
																		totalconfig.totalconnectionconfig.push(temp);
																		
																		
																var foundsource_id =   info.sourceId.substring(0,4);
																console.log(foundsource_id);
																
																var foundtarget_id =    info.targetId.substring(0,4);
																console.log(foundtarget_id);
																
																if(foundsource_id == "SIVR") source = "ivr" ;
																	
																else if(foundsource_id == "HANG") source = "hangout" ;
																	
																else if(foundsource_id == "AGTW") source = "agntworking" ;
																	
																else if(foundsource_id == "COPN") source = "checkopening" ;
																
																else if(foundsource_id == "CTOR") source = "checktimerenge" ;
																	
																else if(foundsource_id == "RIDN") source = "readnumber" ;
																
																else if(foundsource_id == "PLWF") source = "playwavfle" ;
																	 
																else if(foundsource_id == "TTOS") source = "texttospeech" ;
																	 
																else if(foundsource_id == "ITRM") source = "interactivemenu" ;
																	 
																else if(foundsource_id == "CURL") source = "callurl" ;
																	 
																else if(foundsource_id == "CFUN") source = "callfunction" ;
																
																else alert('big errot....................');
																
																
																if(foundtarget_id == "SIVR") target = "ivr" ;
																	
																else if(foundtarget_id == "HANG") target = "hangout" ;
																	
																else if(foundtarget_id == "AGTW") target = "agntworking" ;
																	
																else if(foundtarget_id == "COPN") target = "checkopening" ;
																
																else if(foundtarget_id == "CTOR") target = "checktimerenge" ;
																	
																else if(foundtarget_id == "RIDN") target = "readnumber" ;
																
																else if(foundtarget_id == "PLWF") target = "playwavfle" ;
																	 
																else if(foundtarget_id == "TTOS") target = "texttospeech" ;
																	 
																else if(foundtarget_id == "ITRM") target = "interactivemenu" ;
																	 
																else if(foundtarget_id == "CURL") target = "callurl" ;
																	 
																else if(foundtarget_id == "CFUN") target = "callfunction" ;
																
																	 
																
																console.log(totalconfig[source][info.sourceId].endpoint[info.sourceEndpoint.connectorOverlays[0][1].label].con);
																totalconfig[source][info.sourceId].endpoint[info.sourceEndpoint.connectorOverlays[0][1].label].con = "yes";
																console.log(totalconfig[source][info.sourceId].endpoint[info.sourceEndpoint.connectorOverlays[0][1].label].con);
																
																console.log(totalconfig[target][info.targetId].endpoint[info.targetEndpoint.connectorOverlays[0][1].label].con);
																totalconfig[target][info.targetId].endpoint[info.targetEndpoint.connectorOverlays[0][1].label].con = "yes";
																console.log(totalconfig[target][info.targetId].endpoint[info.targetEndpoint.connectorOverlays[0][1].label].con);
																		
																		
																		}
																		else
																			{
																				jsPlumb.detach(info);
																				
																				 var shortCutFunction = 'info';
																					var msg = "READ NUMBER CAN ONLY CNNECT TO CALL URL AND CALL FUNCTION";
																					var title = 'Disconnected';

																					toastr.options = {
																						'closeButton': 'true',
																						debug: false,
																						positionClass: 'toast-top-right',
																						onclick: null
																					};


																					var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
																					//  $toastlast = $toast;
																					if ($toast.find('#okBtn').length) {
																						$toast.delegate('#okBtn', 'click', function () {

																							$toast.remove();
																						});
																					}
																			}
																}
																else{
																//
																console.log(info);
																console.log(info.sourceEndpoint.connectorOverlays[0][1].label);
																temp = { "sourceId" : info.sourceId , "targetId" : info.targetId , "label" : info.sourceEndpoint.connectorOverlays[0][1].label , "sourceenpointposx" : info.sourceEndpoint.anchor.x , "sourceenpointposy" : info.sourceEndpoint.anchor.y }
																totalconfig.totalconnectionconfig.push(temp);
																
																console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
															 
																  
																var foundsource_id =   info.sourceId.substring(0,4);
																console.log(foundsource_id);
																
																var foundtarget_id =    info.targetId.substring(0,4);
																console.log(foundtarget_id);
																
																if(foundsource_id == "SIVR") source = "ivr" ;
																	
																else if(foundsource_id == "HANG") source = "hangout" ;
																	
																else if(foundsource_id == "AGTW") source = "agntworking" ;
																	
																else if(foundsource_id == "COPN") source = "checkopening" ;
																
																else if(foundsource_id == "CTOR") source = "checktimerenge" ;
																	
																else if(foundsource_id == "RIDN") source = "readnumber" ;
																
																else if(foundsource_id == "PLWF") source = "playwavfle" ;
																	 
																else if(foundsource_id == "TTOS") source = "texttospeech" ;
																	 
																else if(foundsource_id == "ITRM") source = "interactivemenu" ;
																	 
																else if(foundsource_id == "CURL") source = "callurl" ;
																	 
																else if(foundsource_id == "CFUN") source = "callfunction" ;
																
																else alert('big errot....................');
																
																
																if(foundtarget_id == "SIVR") target = "ivr" ;
																	
																else if(foundtarget_id == "HANG") target = "hangout" ;
																	
																else if(foundtarget_id == "AGTW") target = "agntworking" ;
																	
																else if(foundtarget_id == "COPN") target = "checkopening" ;
																
																else if(foundtarget_id == "CTOR") target = "checktimerenge" ;
																	
																else if(foundtarget_id == "RIDN") target = "readnumber" ;
																
																else if(foundtarget_id == "PLWF") target = "playwavfle" ;
																	 
																else if(foundtarget_id == "TTOS") target = "texttospeech" ;
																	 
																else if(foundtarget_id == "ITRM") target = "interactivemenu" ;
																	 
																else if(foundtarget_id == "CURL") target = "callurl" ;
																	 
																else if(foundtarget_id == "CFUN") target = "callfunction" ;
																
																	 
																
																console.log(totalconfig[source][info.sourceId].endpoint[info.sourceEndpoint.connectorOverlays[0][1].label].con);
																totalconfig[source][info.sourceId].endpoint[info.sourceEndpoint.connectorOverlays[0][1].label].con = "yes";
																console.log(totalconfig[source][info.sourceId].endpoint[info.sourceEndpoint.connectorOverlays[0][1].label].con);
																
																console.log(totalconfig[target][info.targetId].endpoint[info.targetEndpoint.connectorOverlays[0][1].label].con);
																totalconfig[target][info.targetId].endpoint[info.targetEndpoint.connectorOverlays[0][1].label].con = "yes";
																console.log(totalconfig[target][info.targetId].endpoint[info.targetEndpoint.connectorOverlays[0][1].label].con);
																//console.log(totalconfig);
																//console.log(totalconfig.agntworking.info.targetId);
																
																}
												
											}
										
				}
						
			})
		});
		})();
		
		
		
		
