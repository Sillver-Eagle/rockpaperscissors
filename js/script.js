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
  
  if (computerChoice > .8){
    (input === rock && computerChoice <= 0.40) 
console.log("Tie"); }
  
   else if (input === rock && computerChoice >= 0.60) {
    console.log("Loss");
}
   else if (input === rock && computerChoice === 0.50) { 
    console.log("Win");
  }
  //when user picks Paper
 else  if (input === paper && computerChoice <= 0.40) {
    console.log("Win");
 }
  else if (input === paper && computerChoice >= 0.60) { 
    console.log("Tie");
}
  else if  (input === paper && computerChoice === 0.50) {
    console.log("Loss");
  }
  //when user picks scissors

  else if (input === scissors && computerChoice <= 0.40) {
    console.log("Loss");
}
   else if (input === scissors && computerChoice >= 0.60) {
    console.log("Win");
}

   else if (input === scissors && computerChoice === 0.50) {
    console.log("Tie");
  }
});


