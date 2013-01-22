<?php
    require_once '/includes/include_files.inc';

    $temp = SolveGame();
    echo $temp;
    
    function SolveGame(){

        global $answerKey;        
        $answerKey = $_SESSION["GameAnswer"];    
        $errors = 0;
        
        foreach($_POST as $postkey => $postvalue){
            if($postkey === "Submit") continue;        
                 if($postvalue != $answerKey[$postkey]){ //checking submitted answers against the answer key.
                    $errors++;                 
                }                  
        }
        if ($errors >= 1){        
           if($errors == 1){
               return "You have an error on the board"; 
            }
           return "You have multiple errors on the board";
        }  else {       
            return "YOU WIN";
        }

    }

?>
