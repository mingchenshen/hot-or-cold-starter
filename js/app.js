
$(document).ready(function(){
	// Initialize values
	var answer = randomnum(); 

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// New Game clicked - reset values
  	$(".new").click(function(){
  		answer = randomnum();
  		$("#count").text(0);
  		$("#guessList").find('li').remove();
  	});

  	$("#guessButton").click(function(){
  		event.preventDefault();
  		hotorcold($("#userGuess").val(), answer);
  		$("#userGuess").val('');
  	});

});

function randomnum(){
	var x = Math.floor((Math.random() * 100) + 1);
	console.log(x);
	return x;
}

function hotorcold(num, ans){
	var dist = Math.abs(num - ans);
	//Check if the number is between 1 and 100

	if(jQuery.trim(num).length == 0 
		||isNaN(num) 
		|| num > 100 
		|| num === 0){
		$("#feedback").text("Guess between 1 and 100");
	}else{
		//Determine distance 
		if(dist >= 50){
			$("#feedback").text("Your guess is ice cold!");
		}else if(dist >= 30 && dist < 50){
			$("#feedback").text("Your guess is cold!");
		}else if(dist >= 15 && dist < 30){
			$("#feedback").text("Your guess is warm!");
		}else if(dist >= 5 && dist < 15){
			$("#feedback").text("Your guess is hot!");
		}else if(dist >= 1 && dist < 5){
			$("#feedback").text("Your guess is very hot!");
		}else if(dist === 0){
			$("#feedback").text("Congrats! the answer was " + num);
		}
		//Add number to guesslist if its wrong
		if(num != ans){
			$("#guessList").append("<li>" + num + "</li>");
		}
	}
}