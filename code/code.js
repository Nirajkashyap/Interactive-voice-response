var flag = 0;
flag2 = '';
connectionflag = 0 ;
	//************************************************** 
 	// GLOBLE DECLARE ARRAY ALL MENU
	//************************************************** 
	totalconnectionconfigArray = []; 
	totalconfig =
		{
			ivr 			:  {} ,
			hangout 		:   {} ,
			agntworking 	:  {} ,
			checkopening 	:   {} ,
			checktimerenge 	:   {} ,
			readnumber 		:   {} ,
			playwavfle 		:  {} ,
			texttospeech	:   {} ,
			
			interactivemenu	:  {} ,
			
			callurl			:   {} ,
			callfunction	:   {} ,
			totalconnectionconfig : 	[],
			endpoinnts : {}
		}
	
 
	//************************************************** 	
	// GENERAT NEW ROW MEANS ITERACTIVE MENU CHOICE ADD
	//************************************************** 	
	function generateRow() 
		{
			console.log($("#interactivemenuid").html())
			counter = $("#iemnuidtotalchoice").text();
			console.log(counter);
			   counter = parseInt(counter) + 1;
			$("#iemnuidtotalchoice").html("");
			$("#iemnuidtotalchoice").html(counter);

			//  $("#locutionchoiceid1").append("<input type='text' placeholder='Choices Add Onthor' class='form-control' >");
			$("#iemnuidtotalchoicearray").append('<br><input type="text" placeholder="Choices Add Onthor" class="form-control" id="locutionchoiceid'+counter+'" value="default">');
		}

	
	//******************************************************************************
	// DONE FUNCTION FOR ALL POP UP DATA STORE AND DATA BLANK AND DATA BIND TO POP UP  
	//******************************************************************************
	function done(argument)
				{
					//Interactive insert Menu and bind and pop up dsplay text
					if(argument == "interactivemenuinsert")
					{
						comaprisonid = $("#interactivemenuid").html()
						
						//totalconfig.interactivemenu[comaprisonid][endpoint] = $("#callfunctiontextid").val();
							
							temp2 = [ ];
							
								for(i=1 ;i <= $("#iemnuidtotalchoice").html(); i++)
									{
										console.log($("#locutionchoiceid"+i).val());
										//temp2.push($("#locutionchoiceid"+i).val());
										tempy =  0 + i * 0.1;
										console.log(tempy);
										anchortemp = [ tempy ,1 , 1, 0 ];
										console.log(anchortemp);
										jsPlumb.addEndpoint(comaprisonid, { anchor: anchortemp }, getendpointsetting("source",$("#locutionchoiceid"+i).val()));
										totalconfig.interactivemenu[comaprisonid].endpoint[$("#locutionchoiceid"+i).val()] = { con : "no" , pos  : anchortemp , type : "source"};
									}
							
									totalconfig.interactivemenu[comaprisonid]["locution"] =  $("#locutionid").val();
									totalconfig.interactivemenu[comaprisonid]["NoOftimes"] =  $("#locutionnumid").val();
									totalconfig.interactivemenu[comaprisonid]["Timeout"] =  $("#locutiontimeid").val();
									console.log(totalconfig.interactivemenu[comaprisonid].endpoint);
									
											
								
						
						
					}
					//Call FunctionInsert Text and bind and pop up dsplay text 
					else if( argument =="callfunctioninsert")
						{
							comaprisonid = $("#callfunctionid").html()
								
								totalconfig.callfunction[comaprisonid]['text'] = $("#callfunctiontextid").val();
								
						}
					// Call Insert Text store and bind and pop up dsplay text	
					else if( argument =="callurlinsert")
						{
							comaprisonid = $("#callurlid").html()

								totalconfig.callurl[comaprisonid]['text'] = $("#callurltextid").val();
						}
						
						
					else if( argument =="texttospeechinsert")
						{
							comaprisonid = $("#texttospeechid").html()

								totalconfig.texttospeech[comaprisonid]['text'] = $("#texttospeechtextid").val();
						}	
				}
		
	 
	//****************************		
	// GET INFORMATION BY ID 		
	//****************************
	function GetInformationByID(data) 
		{
			//document.getElementById("txtid").value=data.id;
			console.log('okkkk');
			console.log(data.id);
		//$("#responsive").fade();
		//$('#responsive').modal('show')

			$("#modalbody").html("");
			
			var found_id =   data.id.substring(0,4);

				console.log(found_id);

				//Start IVR
				if(found_id == "SIVR")
				{
					$('#responsive').modal('show')
					$("#imenuid").html(data.id);
				}
				//Hangout
				else if(found_id == "HANG") 
				{
					$('#responsive').modal('show')
					$("#imenuid").html(data.id);
				}
				//Agents Working
				else if(found_id == "AGTW")
				{
					$('#responsive').modal('show')
					$("#imenuid").html(data.id);
				}
				//Check opening
				else if(found_id == "COPN")
				{
					$('#responsive').modal('show')
					$("#imenuid").html(data.id);
				}
				//Check time range
				else if(found_id == "CTOR")
				{
					$('#checktimerange').modal('show')
					$("#imenuidctmr").html(data.id);
				}
				//Read number
				else if(found_id == "RIDN")
				{
					$('#responsive').modal('show')
					$("#imenuid").html(data.id);
				}
				//Play wav file
				else if(found_id == "PLWF")
				{
					$('#playwavefile').modal('show')
					$("#playwavefileid").html(data.id);
				}
				//text to speech
				else if(found_id == "TTOS")
				{
						$('#texttospeech').modal('show')
						$("#texttospeechid").html(data.id);
						$("#texttospeechtextid").val("default");
						
						
						$("#texttospeechtextid").val(totalconfig.texttospeech[data.id]["text"])
						
								 
				}
				//interactive menu
				else if(found_id == "ITRM")
				{
							$('#interactivemenu').modal('show')
							$("#interactivemenuid").html(data.id);
							$("#iemnuidtotalchoicearray").html("")
							$("#iemnuidtotalchoice").html("0")
							$("#locutionid").val("")
							$("#locutionnumid").val("")
							$("#locutiontimeid").val("")
							
								comaprisonid = data.id
								
													//$("#iemnuidtotalchoice").html(totalconfig.interactivemenu[i].choice.length)
													$("#locutionid").val(totalconfig.interactivemenu[comaprisonid]["locution"])
													$("#locutionnumid").val(totalconfig.interactivemenu[comaprisonid]["NoOftimes"])
													$("#locutiontimeid").val(totalconfig.interactivemenu[comaprisonid]["Timeout"])
							
								id = 1 ;
								for(i in totalconfig.interactivemenu[comaprisonid].endpoint){
										
										
										if( i != "Interactive Menu")
										{
										$("#iemnuidtotalchoicearray").append('<br><input type="text" placeholder='+i+' class="form-control" id="locutionchoiceid'+id+'" value='+i+'>');	
												
										id = id + 1 ;		
										}			
													
												

								}
				
				
				
			
				//	$("#iemnuidtotalchoicearray").html('<div class="form-group" id="iemnuidtotalchoicearray"><label>Choices</label><input type="url" placeholder="Choices" class="form-control" id="locutionchoiceid1">   <br/>	<a class="btn btn-s-md btn-default btn-rounded" value="or Add Onthor" onclick="generateRow()"> or Add Onthor</a><label id="iemnuidtotalchoice" >1</label></div>'	);
				}
				//call url
				else if(found_id == "CURL")
				{
					$('#callurl').modal('show')
					$("#callurlid").html(data.id);
					
						$("#callurltextid").val(totalconfig.callurl[data.id]["text"])
									
				}
				//call function
				else if(found_id == "CFUN")
				{
					$('#callfunction').modal('show')
					$("#callfunctionid").html(data.id);
					$("#callfunctiontextid").val("default");
						
							$("#callfunctiontextid").val(totalconfig.callfunction[data.id]["text"])
					 
				}

			   // document.getElementById("txtid").value=data.id;

				//if (found_id == " ") 
				//	{

				//}

		}
		
	
	//DREG FUNCTION
	function drag(ev) 
		{
			console.log('drag ..................');
			console.log(ev.target.id);
			ev.dataTransfer.setData("src", ev.target.id);
			console.log('drag eevent');
			flag = 1;
			flag2 = ev.target.id;
		}

		
	//****************************	
	//ALLOWED DROP FUNCTION 
	//****************************
    function allowDrop(ev) 
        {
            console.log('drop ..................');
            console.log(ev);
            //console.log(ev.mozMovementX);
            
            tempposx = ev.clientX;
            //console.log(ev.mozMovementY);
            tempposy = ev.clientY;
            ev.preventDefault();
        }

	
	//****************************
	// GET END POINT SETTING 
	//****************************
	function getendpointsetting(type,label)
		{
			if(type== "source")
			{
					var exampleGreyEndpointOptions =
						{
							endpoint: "Rectangle",
							paintStyle: { width: 10, height: 10, fillStyle: '#666' },
							connector: ["Flowchart", { stub: [10, 10], gap: 1, cornerRadius: 1, alwaysRespectStubs: true }],
							connectorStyle: 
								{ 
									strokeStyle: "#5c96bc", 
									lineWidth: 5, 
									outlineColor: "transparent", 
									outlineWidth: 1,

									
								},
							maxConnections: 1,
							isSource: true,
							onMaxConnections: function (info, e) 
								{
									alert("Maximum connections (" + info.maxConnections + ") reached");
								},
							connectorOverlays: 
								[
										
											["Label", { label: label, id: "labelid" }],
											 [ "Arrow", { 
												location:[0.5, 1.5]
												 
												} ]
											
								],

							deleteEndpointsOnDetach: true,
						};


			}
			else if(type =="target")
			{
			   var exampleGreyEndpointOptions =
						{
							endpoint: "Dot",paintStyle:{ 
							strokeStyle:"#7AB02C",
							fillStyle:"transparent",
							radius:7,
							lineWidth:3 
						},
							connector: ["StateMachine", { curviness: 20 }],
							connectorStyle: { strokeStyle: "#5c96bc", lineWidth: 2, outlineColor: "transparent", outlineWidth: 4 }, isTarget: true,
							maxConnections: 1,
							connectorOverlays: 
								[
										
											["Label", { label: label, id: "labelid" }]
											
											
								],
							onMaxConnections: function (info, e) {
								alert("Maximum connections (" + info.maxConnections + ") reached");
							},

							// append shape deleteend point
							deleteEndpointsOnDetach: true,
						};


			}

			 return exampleGreyEndpointOptions
		}
	
	
		function mouseenter(x)
	{
		console.log('llll');
		x.style.opacity="1";
	}
	
	function mouseleave(x)
	{
	x.style.opacity="0.50";
	}
	
	
	
	
	//****************************
	// DROPCOPY FUNCTION
	//****************************
	function dropcopy(ev) 
		{
			ev.preventDefault();
			console.log("data to be copy's  id  is  ")
			if (flag == 1) 
			{
				console.log(flag2);
				var id0 = Math.random() * 100000000000000000000;

				temp = "m4";	

      
				var exampleGreyEndpointOptions2 =
				{
					endpoint: "Rectangle",
					connector: ["Flowchart", { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true }],
					connectorStyle: 
						{ 
							strokeStyle: "#5c96bc", 
							lineWidth: 5, 
							outlineColor: "transparent", 
							outlineWidth: 4,

							
						},
					maxConnections: 1,
					isSource: true,
					onMaxConnections: function (info, e) 
						{
							alert("Maximum connections (" + info.maxConnections + ") reached");
						},
					connectorOverlays: 
						[
								//	["Arrow", { width: 30, length: 00, id: "arrow" }],
									["Label", { label: "Yes", id: "label" }],
									 [ "Arrow", { 
										location:[0.5, 1.5], 
										cssClass:"endpointSourceLabel" 
										} ]
									
						],

					deleteEndpointsOnDetach: true,
				};

				//connectorOverlays: [["Arrow", { location: 0.5 }]],
			 
				//append shape &  point create id(flag2) Type Shape create flag2
				//appeend Flag2=m1(Start IVR)
				if (flag2 == "m1")
				{
					var id = 'SIVR' + id0;
					console.log(id);

					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape1">   <i class="fa fa-phone fa-3x"></i></div><div class="shape2"></div></div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					
					jsPlumb.draggable(id);
					
					tempendpoint = {};
					// ######################################################################## must same in both line
					jsPlumb.addEndpoint(id, { anchor: [0.5 , 1 , 0 ,0 ] }, getendpointsetting("source","Start IVR"));
					tempendpoint["Start IVR"] = { con : "no" , pos  : [0.5 , 1 , 0 ,0 ] , type : "source"};
					// ####################################################################
					
						temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.ivr[id] = temptopush;
						
					

				}
				
				//appeend Flag2=m2(Hangout)
				else if (flag2 == "m2") 
				{
					var id = 'HANG' + id0;
					console.log(id);

					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape1">    <i class="fa fa-minus-circle fa-3x  icon-white"></i> </div><div class="shape2"></div></div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					jsPlumb.draggable(id);
					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor: [0.5 , 0 , 0 ,0 ] }, getendpointsetting("target","Hangout"));
					tempendpoint["Hangout"] = { con : "no" , pos  : [0.5 , 0 , 0 ,0 ] , type : "target"};
					
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.hangout[id] = temptopush ;
			
				}
				
				//appeend Flag2=m3(Agents Working)
				else if (flag2 == "m3") 
				{
					var id = 'AGTW' + id0;
					console.log(id);

					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape3">   <i class="fa fa-group fa-2x  icon-white"></i></div>   </div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					jsPlumb.draggable(id);
					
					tempendpoint = {} ;
				
						jsPlumb.addEndpoint(id, { anchor: [0.5 , 0 , 0 ,0 ] }, getendpointsetting("target","label"));
						tempendpoint["label"] = { con : "no" , pos  : [0.5 , 0 , 0 ,0 ] , type : "target"};
					
					
						jsPlumb.addEndpoint(id, { anchor: [0, 0.5, 0, 0] }, getendpointsetting("source","Yes"));
						tempendpoint["Yes"] = { con : "no" , pos  : [ 0, 0.5, 0, 0] , type : "source"};

					
						jsPlumb.addEndpoint(id, { anchor: [1, 0.5, 0, 0] }, getendpointsetting("source","No"));
						tempendpoint["No"] = { con : "no" , pos  : [1, 0.5, 0, 0] , type : "source" };
						
					
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.agntworking[id] = temptopush
					//totalconfig.agntworking.push(temptopush);

				}
           
				//appeend Flag2=m4(Check opening)
				else if (flag2 == "m4") 
				{
					var id = 'COPN' + id0;
					console.log(id);
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape3">   <i class="fa fa-clock-o fa-2x  icon-white"></i></div></div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					 
					jsPlumb.draggable(id);
					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor: [0.5 , 0 , 0 ,0 ] },getendpointsetting("target","Check opening"));
					tempendpoint["Check opening"] = { con : "no" , pos  : [0.5 , 0 , 0 ,0 ] , type : "target"};
						
					
					jsPlumb.addEndpoint(id, { anchor: [0, 0.5, 0, 0] }, getendpointsetting("source", "Yes"));
						tempendpoint["Yes"] = { con : "no" , pos  : [0, 0.5, 0, 0] , type : "source"};

					
					jsPlumb.addEndpoint(id, { anchor: [1, 0.5, 0, 0] }, getendpointsetting("source", "No"));
						tempendpoint["No"] = { con : "no" , pos  : [1, 0.5, 0, 0] , type : "source"};
					
					
					
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.checkopening[id] = temptopush ;
					
				}
          
				//appeend Flag2=m5(Check time range)
				else if (flag2 == "m5") 
				{
					var id = 'CTOR' + id0;
					console.log(id);
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape3">   <i class="fa fa-clock-o fa-2x  icon-white"></i></div></div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					jsPlumb.draggable(id);

					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor: [0.5 , 0 , 0 ,0 ] },getendpointsetting("target","Check time range"));
					tempendpoint["Check time range"] = { con : "no" , pos  : [0.5 , 0 , 0 ,0 ] , type : "target"};
						
					
					jsPlumb.addEndpoint(id, { anchor: [0, 0.5, 0, 0] }, getendpointsetting("source", "Yes"));
						tempendpoint["Yes"] = { con : "no" , pos  : [0, 0.5, 0, 0] , type : "source"};

					
					jsPlumb.addEndpoint(id, { anchor: [1, 0.5, 0, 0] }, getendpointsetting("source", "No"));
						tempendpoint["No"] = { con : "no" , pos  : [1, 0.5, 0, 0] , type : "source"};
					
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.checktimerenge[id] = temptopush ;
					
				}
				
				//appeend Flag2=m6(Read number)
				else if (flag2 == "m6")
				{
					var id = 'RIDN' + id0;
					console.log(id);
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">   <i class="fa fa-terminal fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					jsPlumb.draggable(id);
					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor:  [0.5, 0, 0, 0] }, getendpointsetting("target","Read number on target"));
					tempendpoint["Read number on target"] = { con : "no" , pos  : [0.5, 0, 0, 0] , type : "target"};
					
					jsPlumb.addEndpoint(id, { anchor: [0.5, 1, 0, 0] }, getendpointsetting("source","Read number on source"));
					tempendpoint["Read number on source"] = { con : "no" , pos  : [0.5, 1, 0, 0] , type : "source"};
					
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.readnumber[id] = temptopush ;
					

				}
            
				//appeend Flag2=m7(Play wav file)
				else if (flag2 == "m7") 
				{
					var id = 'PLWF' + id0;
					console.log(id);
					
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">  <i class="fa fa-volume-up fa-3x  icon-white"></i></div><div class="shape2"></div></div>');

					//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" > <a  data-toggle="modal" id=' + id + ' href="#playwavefile" onclick="GetInformationByID(this)">Play wave file</a> </div>');
            
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					 
					jsPlumb.draggable(id);
					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor:  [0.5, 0, 0, 0] }, getendpointsetting("target","Play wav file on target"));
					tempendpoint["Play wav file on target"] = { con : "no" , pos  : [0.5, 0, 0, 0] , type : "target"};
					
					jsPlumb.addEndpoint(id, { anchor: [0.5, 1, 0, 0] }, getendpointsetting("source","Play wav file on source"));
					tempendpoint["Play wav file on source"] = { con : "no" , pos  : [0.5, 1, 0, 0] , type : "source"};

					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.playwavfle[id] = temptopush ;
					


				}
            
				//appeend Flag2=m8(text to speech)
				else if (flag2 == "m8")
				{
					var id = 'TTOS' + id0;
					console.log(id);
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">  <i class="fa fa-microphone fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
						$("#"+id).offset({left:tempposx,top:tempposy});
			  
					jsPlumb.draggable(id);
					
					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor:  [0.5, 0, 0, 0] }, getendpointsetting("target","Text To Speech on target"));
					tempendpoint["Text To Speech on target"] = { con : "no" , pos  : [0.5, 0, 0, 0] , type : "target"};
					
					jsPlumb.addEndpoint(id, { anchor: [0.5, 1, 0, 0] }, getendpointsetting("source","Text To Speech on source"));
					tempendpoint["Text To Speech on source"] = { con : "no" , pos  : [0.5, 1, 0, 0] , type : "source"};

					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.texttospeech[id] = temptopush ;
					
				}
				
				//appeend Flag2=m9(interactive menu)
				else if (flag2 == "m9") 
				{
					var id = 'ITRM' + id0;
					console.log(id);
					// apend new shape
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">   <i class="fa fa-sitemap fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
					$("#"+id).offset({left:tempposx,top:tempposy});
			  
					jsPlumb.draggable(id);
				
					tempendpoint = {};
					
				    jsPlumb.addEndpoint(id, { anchor: [0.5, 0, 0, 0] }, getendpointsetting("target","Interactive Menu"));
					tempendpoint["Interactive Menu"] = { con : "no" , pos  : [0.5, 0, 0, 0] , type : "target"};
				   // jsPlumb.addEndpoint(id, { anchor: "BottomCenter" }, getendpointsetting("source","Interactive Menu"));
				   
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					totalconfig.interactivemenu[id] = temptopush ;
					//temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , choice : [] };
					//totalconfig.interactivemenu.push(temptopush);

				}
        
				//appeend Flag2=m10(call url)
				else if (flag2 == "m10") 
				{
					var id = 'CURL' + id0;
					console.log(id);
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape5">  <i class="fa fa-cogs fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
					 $("#"+id).offset({left:tempposx,top:tempposy});
				  //  $("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" > <a  data-toggle="modal" id=' + id + ' href="#callurl" onclick="GetInformationByID(this)">Call Url</a> </div>');
					// apend shape id dregable
					jsPlumb.draggable(id);
					
					
					 tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor:  [0.5, 0, 0, 0] }, getendpointsetting("target","Call Url"));
					tempendpoint["Call Url"] = { con : "no" , pos  : [0.5, 0, 0, 0] , type : "target"};
					
					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.callurl[id] = temptopush ;
					

				}
            
				//appeend Flag2=m11(call function)
				else if (flag2 == "m11") 
				{
					var id = 'CFUN' + id0;
					console.log(id);
					// apend new shape	
					$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape5">   <i class="fa fa-rocket fa-3x  icon-white"></i></div><div class="shape2"></div></div>');

				  //  $("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="' + flag2 + '" > <a  data-toggle="modal" id=' + id + ' href="#callfunction" onclick="GetInformationByID(this)">Call Function</a> </div>');
					// apend shape id dregable
					 $("#"+id).offset({left:tempposx,top:tempposy});
					jsPlumb.draggable(id);
					
					tempendpoint = {};
					jsPlumb.addEndpoint(id, { anchor:  [0.5, 0, 0, 0] }, getendpointsetting("target","Call Function on target"));
					tempendpoint["Call Function on target"] = { con : "no" , pos  : [0.5, 0, 0, 0] , type : "target"};
					
					jsPlumb.addEndpoint(id, { anchor: [0.5, 1, 0, 0] }, getendpointsetting("source","Call Function on source"));
					tempendpoint["Call Function on source"] = { con : "no" , pos  : [0.5, 1, 0, 0] , type : "source"};

					temptopush = { "id" : id ,"x" : tempposx, "y" : tempposy , endpoint : tempendpoint };
					
					totalconfig.callfunction[id] = temptopush ;
					

				}

				//jsPlumb.addEndpoint(id, { anchor: "BottomCenter" }, exampleGreyEndpointOptions2);
				flag = 0;
			}
    

}

 
	//****************************
	// SHW JSON FILE FUN.
	//****************************
	function showjson ()
	{
		console.log('start........');
			console.log(totalconfig);
		console.log('end...........');
	}
	
	//****************************
	//drw json
	//****************************
	function drwjson()
	{
		$("#perimeter-demo").html("");
		drawtotalconfig = totalconfig;
		console.log(drawtotalconfig);
		temp1 = drawtotalconfig.ivr
		for(i in temp1){
		
		id = temp1[i].id;
			//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m1" > <div class="shape1"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x fa-spin"></i></a></div><div class="shape2"></div></div>');
					
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m1" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape1">   <i class="fa fa-phone fa-3x"></i></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp1[i].x,top:temp1[i].y});
		 jsPlumb.draggable(id);
		 
		 for(j in temp1[i].endpoint)
								{
										console.log(j);
										if(temp1[i].endpoint[j].con == "no")
										{
										jsPlumb.addEndpoint(id, { anchor: temp1[i].endpoint[j].pos }, getendpointsetting(temp1[i].endpoint[j].type,j));
										}
								}
		 
		 
		// jsPlumb.addEndpoint(id, { anchor: "BottomCenter" }, getendpointsetting("source","Start IVR"));
		}
		
		
		temp2 = drawtotalconfig.hangout
		for(i in temp2){
		id = temp2[i].id;

		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m2" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape1">   <i class="fa fa-minus-circle fa-3x  icon-white"></i></div><div class="shape2"></div></div>');

//		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m2" > <div class="shape1"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp2[i].x,top:temp2[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp2[i].endpoint)
								{
										console.log(j);
										if(temp2[i].endpoint[j].con == "no")
										{
										console.log(temp2[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp2[i].endpoint[j].pos }, getendpointsetting(temp2[i].endpoint[j].type,j));
										}
								}
		}

		console.log('......................................................'); 
		temp3 = drawtotalconfig.agntworking
		for(i in temp3)
		{
		console.log(temp3[i]);
		id = temp3[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m3" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape3">  <i class="fa fa-group fa-2x  icon-white"></i></div>   </div>');
		$("#"+id).offset({left:temp3[i].x,top:temp3[i].y});
		jsPlumb.draggable(id);
								for(j in temp3[i].endpoint)
								{
										console.log(j);
										if(temp3[i].endpoint[j].con == "no")
										{
											console.log(temp3[i].endpoint[j]);
											jsPlumb.addEndpoint(id, { anchor: temp3[i].endpoint[j].pos }, getendpointsetting(temp3[i].endpoint[j].type,j));
										}
								}
		
		}
		console.log('......................................................'); 
		 
		
		 
		temp4 = drawtotalconfig.checkopening 
		for(i in temp4){
		id = temp4[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m4" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape3">  <i class="fa fa-clock-o fa-2x  icon-white"></i></div></div>');
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m4" > <div class="shape3"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp4[i].x,top:temp4[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp4[i].endpoint)
								{
										console.log(j);
										if(temp4[i].endpoint[j].con == "no")
										{
										console.log(temp4[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp4[i].endpoint[j].pos }, getendpointsetting(temp4[i].endpoint[j].type,j));
										}
								}
		}
		
		console.log(drawtotalconfig);
		 
		temp5 = drawtotalconfig.checktimerenge 
		 console.log(temp5);
		for(i in temp5){
		id = temp5[i].id;
		console.log('dfgdgdfgfghfgh');
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m5" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"> <div class="shape3">  <i class="fa fa-clock-o fa-2x  icon-white"></i></div></div>');	
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m5" > <div class="shape3"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp5[i].x,top:temp5[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp5[i].endpoint)
								{
										console.log(j);
										if(temp5[i].endpoint[j].con == "no")
										{
										console.log(temp5[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp5[i].endpoint[j].pos }, getendpointsetting(temp5[i].endpoint[j].type,j));
										}
								}
		}
		
		 
		temp6 = drawtotalconfig.readnumber 
		for(i in temp6){
		id = temp6[i].id;
		console.log(drawtotalconfig);
		console.log(temp6);
		console.log('abcd');
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m6" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">  <i class="fa fa-terminal fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
	//	$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m6" > <div class="shape4"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp6[i].x,top:temp6[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp6[i].endpoint)
								{
										console.log(j);
										if(temp6[i].endpoint[j].con == "no")
										{
										console.log(temp6[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp6[i].endpoint[j].pos }, getendpointsetting(temp6[i].endpoint[j].type,j));
										}
								}
		 
		}
		
	 
		temp7 = drawtotalconfig.playwavfle 
		for(i in temp7){
		id = temp7[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m7" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">   <i class="fa fa-volume-up fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m7" > <div class="shape4"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp7[i].x,top:temp7[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp7[i].endpoint)
								{
										console.log(j);
										if(temp7[i].endpoint[j].con == "no")
										{
										console.log(temp7[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp7[i].endpoint[j].pos }, getendpointsetting(temp7[i].endpoint[j].type,j));
										}
								}
		}
		
		 
		temp8 = drawtotalconfig.texttospeech 
		for(i in temp8){
		id = temp8[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m8" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">   <i class="fa fa-microphone fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m8" > <div class="shape4"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp8[i].x,top:temp8[i].y});
		 jsPlumb.draggable(id);
		  for(j in temp8[i].endpoint)
								{
										console.log(j);
										if(temp8[i].endpoint[j].con == "no")
										{
										console.log(temp8[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp8[i].endpoint[j].pos }, getendpointsetting(temp8[i].endpoint[j].type,j));
										}
								}
		}
		
	 
		temp9 = drawtotalconfig.interactivemenu 
		for(i in temp9){
		id = temp9[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m9" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape4">  <i class="fa fa-sitemap fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m9" > <div class="shape4"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp9[i].x,top:temp9[i].y});
		 jsPlumb.draggable(id);
		   for(j in temp9[i].endpoint)
								{
										console.log(j);
										if(temp9[i].endpoint[j].con == "no")
										{
										console.log(temp9[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp9[i].endpoint[j].pos }, getendpointsetting(temp9[i].endpoint[j].type,j));
										}
								}
		 
		}
		
		 
		temp10 = drawtotalconfig.callurl
		for(i in temp10){
		id = temp10[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m10" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape5">   <i class="fa fa-cogs fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m10" > <div class="shape5"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp10[i].x,top:temp10[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp10[i].endpoint)
								{
										console.log(j);
										if(temp10[i].endpoint[j].con == "no")
										{
										console.log(temp10[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp10[i].endpoint[j].pos }, getendpointsetting(temp10[i].endpoint[j].type,j));
										}
								}
		}
		
		 
		temp11 = drawtotalconfig.callfunction
		for(i in temp11){
		id = temp11[i].id;
		$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m11" onmouseover="mouseenter(this)" onmouseout="mouseleave(this)" ondblclick="GetInformationByID(this)"><div class="shape5">   <i class="fa fa-rocket fa-3x  icon-white"></i></div><div class="shape2"></div></div>');
		//$("#perimeter-demo").append(' <div class="shape" id=' + id + '  data-shape="m11" > <div class="shape5"> <a  data-toggle="modal" id=' + id + ' href="#responsive" onclick="GetInformationByID(this)">  <i class="fa fa-cogs fa-3x "></i></a></div><div class="shape2"></div></div>');
		 $("#"+id).offset({left:temp11[i].x,top:temp11[i].y});
		 jsPlumb.draggable(id);
		 for(j in temp11[i].endpoint)
								{
										console.log(j);
										if(temp11[i].endpoint[j].con == "no")
										{
										console.log(temp11[i].endpoint[j]);
										jsPlumb.addEndpoint(id, { anchor: temp11[i].endpoint[j].pos }, getendpointsetting(temp11[i].endpoint[j].type,j));
										}
								}
		}
		connect();
	}
	
	//****************************
	//CONNECT FUNCTION
	//****************************
	function connect(){
	
	for(i in totalconfig.totalconnectionconfig){
	 
            var common = {
                anchors: [ [totalconfig.totalconnectionconfig[i].sourceenpointposx,totalconfig.totalconnectionconfig[i].sourceenpointposy], "TopCenter"],
                endpoints: [["Rectangle" ,{ width: 5, height: 5}], ["Dot" ,{ width: 5, height: 5 } ]],
				// endpoint:[ "Rectangle", { width:30, height:10 }],
				// endpoint:[ "Dot", { width:30, height:10 }],
			//	paintStyle: [{ width: 10, height: 10, fillStyle: '#666' },{ width: 10, height: 10, fillStyle: '#666' }],
			connector: ["Flowchart", { stub: [10, 10], gap: 1, cornerRadius: 1, alwaysRespectStubs: true }],
			//	connector: ["Flowchart", { curviness: 100 }],
			paintStyle: { lineWidth: 5, strokeStyle: "#5c96bc" },
				overlays: [
                    [ "Arrow", { foldback:0.6 }, common ],
                    [ "Label" ,{ label: totalconfig.totalconnectionconfig[i].label, id: "labelid" }, { cssClass:"labelClass" } ]
                ],
				connectorStyle: 
					{ 
					strokeStyle: "#7AB02C", 
					lineWidth: 5, 
					outlineColor: "transparent", 
					outlineWidth: 1,

					
				}

				
            };

			connectionflag = 1 ;
            jsPlumb.connect({ source: totalconfig.totalconnectionconfig[i].sourceId, target: totalconfig.totalconnectionconfig[i].targetId }, common);
			 

	
	}
	connectionflag = 0 ;
	}