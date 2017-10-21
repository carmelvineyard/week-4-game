$(document).ready(function() {

//Variables!
	
	var playerChar="";
	var sparPart="";
	var isPcChosen=false;
	var isSparChosen=false;
	var pcObj;
	var sparObj;
	var pcHp;
	var pcAtk;
	var sparHp;
	var sparCtr;
	var stillPlaying = true;
	var stats = [
		rey = {
			hp:150,
			atk:5,
			ctr:26
		},
		leia = {
			hp:155,
			atk:4,
			ctr:24
		},

		luke = {
			hp:140,
			atk:6,
			ctr: 25
		},

		mara = {
			hp:145,
			atk:7,
			ctr:27
		}
	];
	//keeps banners and reset button from being shown on startup:
	$(".won").hide();
	$(".lost").hide();
	$(".continue").hide();	

//Functions!!
 
	console.log("ready");

//functions dealing with movement of characters
	//user selects a player character (PC) and sparring partner (NPC)
	//function selectPCnpc() {
	 // if(stillPlaying) {     
		$(".char").on("click", function() {
		  if(!isPcChosen) {
			playerChar = $(this).attr("value");
			console.log(playerChar);
			if(playerChar === "rey"){
				pcObj = (stats.rey);}
			if(playerChar === "leia"){
				pcObj = (stats.leia);}
			if(playerChar === "luke"){
				pcObj = (stats.luke);}
			if(playerChar === "mara"){
				pcObj = (stats.mara);}
	    	$("#pc-home").append(this);
	    	$(this).removeClass("char").addClass("pc");
	    	console.log(this);
	    	console.log();
	    	pcHp = (playerChar.hp);
	    	pcAtk = (playerChar.atk);
	    	isPcChosen = true;
	    		  		
	    	return $(this).attr("id");
	      };//if(!isPcChosen) close
		   // else {   //The console wasn't expecting this else for some reason.
		    	if(!isSparChosen) {
		    	  if($(this).attr("value") == playerChar){
		    	  	return false;
		    	  }
		    	  else {
		    	  	sparPart = $(this).attr("value");
		    	  	$("#npc-home").append(this);
		    	  		$(this).removeClass("char").addClass("npc");
		    	  		console.log(this);

			    	  	if (sparPart === "rey") {
			    	  		sparObj = (stats.rey);
			    	  	};
			    	  	if (sparPart === "leia") {
			    	  		sparObj = (stats.leia);
			    	  	};
			    	  	if (sparPart === "luke") {
			    	  		sparObj = (stats.luke);
			    	  	};
			    	  	if (sparPart === "mara") {
			    	  		sparObj = (stats.mara);
			    	  	};

			    	  	console.log(sparPart);
			    	  	console.log(sparPart.hp);
			    	sparHp = (sparPart.hp);
			    	sparCtr = (sparPart.ctr);
			    	isSparChosen = true;
		    	  }//else close
		     };//if close
		   });//else close
		   return;
			
			

		  
	    });//.char on click close
	   
	//I had more closures here but the console thought they were errors.
	
 
//functions dealing with attacks

   function attackFunction() {
	    $("#att-butt").click(function() {
	    	// function chkPartner () {
		    //   if ($("#npc-home").html().length === 0) {
		    //   	$("#npc-home").text("Please pick a sparring partner.")
		    //   };
		    //   if ($("#npc-home").html().length > 0) {
		      	battle();
	      	});
	      };

	    //});//att-butt close

    	function battle() {
    		var tempPcHp = (pcHp - sparCtr);
    			pcHp = tempPcHp;
    			$("#pc-home .hp").html(tempPcHp);

    		var tempSparHp = (sparHp - tempPcAtk);
    			sparHp = tempSparHp;
    			$("#npc-home .hp").html(tempSparHp);

    		var x = 1;
    		var tempPcAtk = (pcAtk * x);
    			x++;

	    	if(pcHp <= 0) {
	    		defeat();
	    	}
	    	else if(sparHp <= 0) {
	    		$(".npc").fadeOut("slow");
	    		if(partnersDefeated === 2) {
	    			victory();
	    		}

	    		else {
	    			$("#npc-home").empty();
	    			partnersDefeated++;
	    			$(".continue").show();
	    			pickPart();
	    		}
	    	}//else if close

	    	return;	
    	};//battle close

   // }; //attackFunction close


//functions dealing with end conditions and resetting the game
    function victory() {
    	$(".won").show();//displays message and reset button
    	$("#char-start").empty();
    	$(".row").empty();
    	reset();
    	return;
    };

    function defeat() {
    	$(".lost").show();//displays message and reset button
    	$("#char-start").empty();
    	$(".row").empty();
    	reset();
    	return;
    };

  
    function reset() {
    	$(".won").hide();
	    $(".lost").hide();
	    $(".continue").hide();
	    var playerChar="";
		var sparPart="";
		var pcObj;
		var sparObj;
		var pcHp;
		var pcAtk;
		var sparHp;
		var sparCtr;
		$("#char-start").html('<button class="char" value="rey"><p>Rey</p><img src="./assets/images/rey.jpg"><p class="hp">150</p></button><button class="char" value="leia"><p>Leia Organa Solo</p><img src="./assets/images/leia.jpg"><p class="hp">155</p></button><button class="char" value="luke"><p>Luke Skywalker</p><img src="./assets/images/luke.jpg"><p class="hp">140</p></button><button class="char" value="mara"><p>Mara Jade</p><img src="./assets/images/mara.jpg"><p class="hp">145</p></button>');
	    selectPC();
	    var stats = [
				rey = {
					hp:150,
					atk:5,
					ctr:26
				},
				leia = {
					hp:155,
					atk:4,
					ctr:24
				},

				luke = {
					hp:140,
					atk:6,
					ctr: 25
				},

				mara = {
					hp:145,
					atk:7,
					ctr:27
				}
			];
		return;
    };//reset close

//});//document.ready close- at least I thought so... the console
//thought differently and was not expecting them.



//});