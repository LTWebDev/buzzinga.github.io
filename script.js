/***  
Global 
***/
let number_of_games = 0;
let player_score = 0;
let computer_score = 0;


/***  
rules 
***/

let $overlay = $('<div id="overlay"></div>');
let $image = $("<img>");

$overlay.append($image);

$("body").append($overlay);

// event when clicked
$("#rules").click(function(event) {
  event.preventDefault();
  //get the image
  let image = $(this).attr("href");
  // update overlay with rules image
  $image.attr("src", image);
  // show the overlay
  $overlay.show();
});

// Hide overlay when clicked
$overlay.click(function() {
  $overlay.hide();
});

/***
START 
***/

let player_choice = "";

function start_game(player_choice){
    $("#user-choice").text(player_choice + " vs ");
    rpsls_game(player_choice);
}

// event listeners trigger game
  $('#rock').click(function(){
    player_choice = "Rock";
    start_game(player_choice);
  });

  $('#paper').click(function(){
    player_choice = "Paper";
    start_game(player_choice);
  });

  $('#scissors').click(function(){
    player_choice = "Scissors";
    start_game(player_choice);
  });

  $('#lizard').click(function(){
    player_choice = "Lizard";
    start_game(player_choice);
  });

  $('#spock').click(function(){
    player_choice = "Spock";
    start_game(player_choice);
  });

// HELPER FUNCTIONS

  // convert player's choice name to a number

function name_to_number(player_choice){

    if(player_choice === "Rock") {
      player_choice = 0;
      return player_choice;
  } else if (player_choice === "Spock") {
      player_choice = 1;
      return player_choice;
  } else if (player_choice === "Paper") {
      player_choice = 2;
      return player_choice;
  } else if (player_choice === "Lizard") {
      player_choice = 3;
      return player_choice;
  } else if (player_choice === "Scissors") {
      player_choice = 4;
      return player_choice;
  }
}

  // convert computer's number to a name
function number_to_name(computer_number){

    let computer_choice;

    if (computer_number === 0) {
      computer_choice = "Rock";
      return computer_choice;
    } else if (computer_number === 1){
        computer_choice = "Spock";
        return computer_choice;
    } else if (computer_number === 2){
        computer_choice = "Paper";
        return computer_choice;
    } else if (computer_number === 3){
        computer_choice = "Lizard";
        return computer_choice;
    } else if (computer_number === 4){
        computer_choice = "Scissors";
        return computer_choice;
    }
}

// GAME CODE

function rpsls_game(player_choice) {
    let computer_choice;
    let difference;
    let player_number;

    // convert player's choice (player_name) to player_number using the function name_to_number()
    player_number = name_to_number(player_choice);

    // compute random guess for computer_number using random.randrange()
    let computer_number = Math.floor(Math.random(0, 5) * 5);

    // convert comp_number to comp_choice using the function number_to_name()
    computer_choice = number_to_name(computer_number);

    // output the message for computer's choice
    $("#comp-choice").text(computer_choice);

    // compute difference between computer_number and player_number modulo 5
    difference = ((player_number-computer_number)-(Math.floor((player_number-computer_number)/5)*5));
    number_of_games +=1;

// determine winner, output winner message
    let result = $('.result h2');
    let win = $('.win h2');
    let lose = $('.lose h2');
    if (difference === 1 || difference === 2) {
        player_score += 1;
        result.html("You win !");
        win.html(player_score);
        lose.html(computer_score);

    } else if (difference === 3 || difference === 4) {
        computer_score +=1;
        result.html("Computer wins !");
        win.html(player_score);
        lose.html(computer_score);

    } else {
        result.html("Draw !");
    }

    // reset game scores

    $('.reset').click(function() {
        number_of_games = 0;
        player_score = 0;
        computer_score = 0;
        $("#gameplay h2").text("");
        result.html("");
        win.html(player_score);
        lose.html(computer_score);
    });
}