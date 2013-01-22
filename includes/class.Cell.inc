<?php
 //require_once 'constants.inc';
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of class
 * contains all of the information for the each Cell of the Sudoku Board.
 * @author Clarence
 */
$MAX_CELL_COUNT = 81; 
class Cell {
    
    private $hidden = false; // Tells wether or not the cell is hidden.
    private $cellValue ;  
    private $cellID  ;
    static public $CellArrayValues = [];

    /**
     * 
     * @param int $id
     */
    public function __construct($id) {
        $this->cellID = $id;
    }
    /**
     * 
     * @return none
     */
    public function _getCellValue() { // gets the Value of the Cell
        return $this->cellValue;        
    } 
       /**
        * 
        * @param numeric $value
        */ 
    public function _setCellValue($value) { // sets the value of the cell
        trim($value);
        if(isset($value)){
            $this->cellValue = (int)  $value;
            $this->_setCellArrayValues();
        }        
    }
    public function _getCellArrayValues() { // gets the Value of the Cell
        return self::$CellArrayValues[$this->cellID];        
    } 
        
    private function _setCellArrayValues() { // sets the value of the cell
        self::$CellArrayValues [] = $this->cellValue;
        
    }

    public function _getIsHidden(){ // gets the hidden property of the cell
        return $this->hidden;
    }
    /**
     * 
     * @param bool $value
     * @throws Exception
     */
    public function _setIsHidden($value){ // sets the hidden property of the cell
       
      try {
            if(is_bool($value)){ 
                $this->hidden = $value;
           }else{
               throw new Exception("Must supply a Boolean");
           }
       
       } catch (Exception $e){
           print_r($e->getMessage());
       }
    } 
        /**
         * 
         * @return String
         */
    public function __toString() {
        
        return $temp = ($this->hidden == FALSE)?((string) $this->cellValue):"<input class=\"hidden\" type=\"text\" maxlength=\"1\" name=\"{$this->cellID}\"> </input>";
    }
}

$answerKey = $gameArray = $gameTable = [];
for ( $i = 1; $i <= $MAX_CELL_COUNT; $i++){ // generates the cell
    $gameTable[$i] = new Cell($i);      
}

?>


