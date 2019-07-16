
$( document ).ready(function() {
    
});


// star of game should show a number between 19 - 120

var random =Math.floor(Math.random() * 119 + 1)

  // console.log(random);
 $("#randomnumber").text(random);


// set random numbers between 1-12 for each crystal
 
 function crystalPush(){
     for (var i =0; i < 4; i++){
      var crystalScore = Math.floor(Math.random()* 12)+1;
    }
    console.log("SCORE FOR CRYSTAL: ",crystalScore);

    number = Math.random() * 13;
$("#button1").src += number;
     
 }
 crystalPush ();
//var userTotal = crystal

var wins = 0
var losses = 0
var finalTotal = 0

$("#numberWins").text(wins);
$("#numberlosses").text(losses);
//$('#finalTotal').test(userTotal);
//reset function

function reset(){
  var random =Math.floor(Math.random() * 119 + 1);
  console.log(random);
  $("#randomNumber").text(random);
  var crystal = Math.floor(Math.random()*12)
  userTotal= 0;
  $('#finalTotal').text(userTotal);




}


var btn1 = $("#button1")
var btn2 = $("#button2")
var btn3 = $("#button3")
var btn4 = $("#button4")

//click on the each crystal 
$("#gems").on("click",function(){
    
  btn1 = crystalPush();

});console.log(btn1);


// a new random number should be  generated every single time the player wins or losses
//when you  click on the crystal it should add to the previous result
//untill result = the score number
//if the number is not equal to score  game starts over.
// if the number =  score number, win go up by 1+
// if the number > score number , loss go up by 1+


























