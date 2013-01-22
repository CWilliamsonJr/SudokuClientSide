
var requestObj = {
         url: "BoardValues.php", // File to retrive
         type: "GET",
         success: MakeBoard, // function when its succesful
         dataType: 'json', // data type of the retrived file
         error: function(){alert("Cannot retrive requested file")} // what to do if it fails.
     } 
var answerkey; // Contains the current answer key for the puzzle
var errorStart = null; // makes the board display you have an error is the board is checked on start.
var errors = new Array();
var filledOut ; // Is used to see if the input boxes are empty.
     
$(function(){  // Loads the javascript when the page is done loading.
     
   $.ajax(requestObj);
   $("div").delegate("input","keyup",CheckAnswers); // runs the checkanswer function on every keyup

   $("#check").click(function(){      
       if (errors.length > 0 || errorStart === null || filledOut == false){ // checks to see if there are any erroros and if all the boxes are filled out.
           $("#details").html("You have one or more errors on the Board");
       }else{
           $("#details").html("You WIN!!");
       }
       return false;
   })   
   
  $("#new_puzzle").click(function(){      // relaods the page
       location.reload(true);
       return false;
   })
  
});

function MakeBoard(gameValues){ //populates the gameboard.
    
    var index;
    var MAX = 81;
    var id;
    answerkey = gameValues.answerKey;
    
    for(index = 1; index <= MAX ; index++){        
        id = "#" + index;       
        $(id).html(gameValues.gameArray[index]);
    }    
}

function CheckAnswers(){
     if(answerkey[Number($(this).attr("name"))] != Number($(this).val())){ // compares the answerkey to the value of the input box.
            
            if($.inArray(Number($(this).attr("name")), errors) === -1){  // checks to see if the input box is in the array
                errors.push(Number($(this).attr("name")));               // adds the input box to the array
            }              
            errorStart = true;
        }
         if(answerkey[Number($(this).attr("name"))] == Number($(this).val())){  // compares the answerkey to the value of the input box.
            errorStart = true;             
            var temp = $.inArray(Number($(this).attr("name")), errors);  //finds the location of the input box.          
            if(temp != -1){
                  errors.splice(temp,1);  // removes the input box from the array by index.
                  
            }
        }
   $(".hidden").each(function(){ // checks all the input boxes to see if they are filled out.
      if($(this).val().length !== 0){          
          console.log(filledOut);
      }else{
          filledOut = false;          
          return false; // returns false if one of the boxes is not filled out.
      } 
   });
}
