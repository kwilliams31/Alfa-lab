// in jQuery land when we see : $
// to invoke the HTML elements
// take a looksy in "vanilla" js

// get value of the First Name
//let el = document.getElementById("fname");
//console.log("e' is =:", el.val);

// document.body.style.color = 'darkgreen'

// button and statements for entering name
$(document).ready(function() {  
  $("#sendName").click(function() {         
    $("#greetingOutput").text("Hi " + $("#fname").val() + "! I hope you are doing well. Sending good vibes!");
    
    // additional click button with secret message
    $("#clickMe").click(function() {
      $("#secretMessage").text("Thanks for clicking. Just wanted to say you're doing great!");
      
    });
      });
      });