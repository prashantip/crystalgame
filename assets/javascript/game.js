
$( document ).ready(function() {
    

var wins = 0
var losses = 0
var PlayerScore = 0


// star of game should show a number between 19 - 120

var random =Math.floor(Math.random() * 100 + 20)

   console.log(random);
 $("#randomNumber").text(random);


// set random numbers between 1-12 for each crystal
 
  var btn1 = Math.floor(Math.random( )*11+1)
  var btn2 = Math.floor(Math.random( )*11+1)
  var btn3 = Math.floor(Math.random( )*11+1)
  var btn4 = Math.floor(Math.random( )*11+1)
  console.log(btn1,btn2,btn3,btn4)

$("#numberWins").text("Player wins:"+ wins);
$("#numberLosses").text("Player losses:"+ losses);
$('#finalTotal').text("Total Score:"+ PlayerScore);


//reset function

function reset(){
  var random =Math.floor(Math.random() * 119 + 1);
  console.log(random);
  $("#randomNumber").text(random);

  var btn1 = Math.floor(Math.random( )*11+1)
  var btn1 = Math.floor(Math.random( )*11+1)
  var btn1 = Math.floor(Math.random( )*11+1)
  var btn1 = Math.floor(Math.random( )*11+1)
  PlayerScore = 0
$('#finalTotal').text("Total Score:"+ PlayerScore);

}


  //add the wins or loss to the Player Score 

  function youWon() {
      wins ++
      $("#numberWins").text("Player wins:"+ wins);
      reset ();
      
  }
    
  function youLost(){
    losses ++
    $("#numberLosses").text("Player losses:"+ losses);
    reset ();
  }


  //click on the each crystal 

//   $(".crystal").each( function(){
//     var random = Math.floor(Math.random() * 11)+1;
//     $(this).attr({
//          "data-random": random    
         
//     });console.log(random)
//  })


  // // var gems = $(".crystal")
  // // $(".crystal").on("click", function(){
  // //   //PlayerScore = $(this).data("random")+PlayerScore;
  // //   console.log($(this).data("random"))
  //   $('#finalTotal').text("Total Score:"+ PlayerScore);

  //   if(PlayerScore == random){
  //     youWon();
  
  //  }
  
  //  else {
  //    youLost();
  //  }
      
  // });
  
 // $('#finalTotal').text("Total Score:"+ PlayerScore);


//click on the each crystal 

$("#button1").on("click",function(){
   
 
  PlayerScore = PlayerScore + btn1;
  $('#finalTotal').text("Total Score:"+ PlayerScore);

   if (random == PlayerScore){ 
      youWon(); }

  else if (PlayerScore > random){
   youLost ();}
  });


  $("#button2").on("click",function(){
   
      
     PlayerScore = PlayerScore + btn2;
     $('#finalTotal').text("Total Score:"+ PlayerScore);
   
      if (random == PlayerScore){ 
         youWon(); }
   
     else if (PlayerScore > random){
      youLost ();}
     });
  

     $("#button3").on("click",function(){
   
      
      PlayerScore = PlayerScore + btn3;
      $('#finalTotal').text("Total Score:"+ PlayerScore);
    
       if (random == PlayerScore){ 
          youWon(); }
    
      else if (PlayerScore > random){
       youLost ();}
      });
    
      $("#button4").on("click",function(){
   
      
        PlayerScore = PlayerScore + btn4;
        $('#finalTotal').text("Total Score:"+ PlayerScore);
      
         if (random == PlayerScore){ 
            youWon(); }
      
        else if (PlayerScore > random){
         youLost ();}
        });



// a new random number should be  generated every single time the player wins or losses
//when you  click on the crystal it should add to the previous result
//untill result = the score number
//if the number is not equal to score  game starts over.
// if the number =  score number, win go up by 1+
// if the number > score number , loss go up by 1+




});















