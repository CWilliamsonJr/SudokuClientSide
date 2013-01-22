<?php
    require_once '/includes/include_files.inc';
    global $gameArray,$answerKey;
    GameBoard::MakeBoard(); // Generates the puzzle
    Region::Hide();  // Hides certain boxes.    
    header('Content-Type: application/json');
    echo(json_encode(array("gameArray" => $gameArray,"answerKey" => $answerKey))); // sends the gameboard and answerkey to jquery.        
?>
