// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let scissors;
let rock;
let paper;

var computerChoice = Math.random();

$("#shoot").click(function() {
  let input = $("#input").val();
  let computerChoice = $("#computerChoice").val();
  //when user picks rock

  if (input === "rock") {
    if (computerChoice === computerChoice <= 0.4) {
      console.log("Tie");
    } else {
      if (computerChoice === computerChoice >= 0.6) {
        console.log("paper wins");
      }
      if ((computerChoice === computerChoice) === 0.5) {
        return "Tie";
        console.log("rock wins");
      }
    }
  }

  //when user picks Paper

  if (input === "paper") {
    if (computerChoice === computerChoice <= 0.4) {
      console.log("paper wins");
    } else {
      if (computerChoice === computerChoice >= 0.6) {
        console.log("Tie");
      }
      if ((computerChoice === computerChoice) === 0.5) {
        console.log("scissors win");
      }
    }
  }

  //when user picks scissors

  if (input === "scissors") {
    if (computerChoice === computerChoice <= 0.4) {
      console.log("rock wins");
    } else {
      if (computerChoice === computerChoice >= 0.6) {
        console.log("scissors wins");
      }
      if ((computerChoice === computerChoice) === 0.5) {
        return "Tie";
        console.log("Tie");
      }
    }
  }
});
