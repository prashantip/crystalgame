
$( document ).ready(function() {
    

var wins = 0
var losses = 0
var PlayerScore = 0


// star of game should show a number between 19 - 120

var random =Math.floor(Math.random() * 100 + 20)

   console.log(random);
 $("#randomNumber").text(  random);


// set random numbers between 1-12 for each crystal
 
 /*function crystalPush(){
     for (var i =0; i < 4; i++){
      var crystalScore = Math.floor(Math.random()* 12)+1;
    }
    console.log("SCORE FOR CRYSTAL: ",crystalScore);

    number = Math.random() * 13;
$("#button1").src += number;
     
 }
 crystalPush ();*/

 var crystal = $(".crystal");
crystal.each(function() {
  var gems = Math.floor(Math.random() * 11) + 1;
  console.log(gems);
  $(this).attr({
    "data-random": gems
  }); 
  
});



$("#numberWins").text("Player wins:"+ wins);
$("#numberLosses").text("Player losses:"+ losses);
$('#finalTotal').text("Total Score:"+ PlayerScore);


//reset function

function reset(){
  var random =Math.floor(Math.random() * 119 + 1);
  console.log(random);
  $("#randomNumber").text(random);
  var crystal = Math.floor(Math.random()*12)
  userTotal= 0;
  $("#numberWins").text("Player wins:"+ wins);
$("#numberLosses").text("Player losses:"+ losses);
$('#finalTotal').text("Total Score:"+ PlayerScore);
reset();
}


  //add the wins to the Player Score 

  function youWon() {
      win ++;
      $("#numberWins").text("Player wins:"+ wins);
      reset ();
      
  }
    
  function youLost(){
    losses ++
    $("#numberLosses").text("Player losses:"+ losses);
    reset ();
  }


//click on the each crystal 
$("#button1").on("click",function(){
 
  PlayerScore += PlayerScore;
  $('#finalTotal').text("Total Score:"+ PlayerScore);
  console.log("In the function, total score :" +PlayerScore);

  if (finalTotal == randomNumber){ 
      youWon(); }

  else if (PlayerScore > randomNumber){
   youLost ();}
  });


  $("#button2").on("click",function(){
 
    PlayerScore += PlayerScore;
    $('#finalTotal').text("Total Score:"+ PlayerScore);
  
    if (PlayerScore == randomNumber){ 
        youWon(); }
  
    else if (PlayerScore > randomNumber){
     youLost ();}
    });
  
    $("#button3").on("click",function(){
 
      PlayerScore += PlayerScore;
      $('#finalTotal').text("Total Score:"+ PlayerScore);
    
      if (PlayerScore == randomNumber){ 
          youWon(); }
    
      else if (PlayerScore > randomNumber){
       youLost ();}
      });
    
      $("#button4").on("click",function(){
 
        PlayerScore += PlayerScore;
        $('#finalTotal').text("Total Score:"+ PlayerScore);
      
        if (PlayerScore == randomNumber){ 
            youWon(); }
      
        else if (PlayerScore > randomNumber){
         youLost ();}
        });
      



// a new random number should be  generated every single time the player wins or losses
//when you  click on the crystal it should add to the previous result
//untill result = the score number
//if the number is not equal to score  game starts over.
// if the number =  score number, win go up by 1+
// if the number > score number , loss go up by 1+




});


















