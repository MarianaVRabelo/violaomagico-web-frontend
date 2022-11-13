import React, { useState } from "react";
import {
    Button,
  } from "./Styles";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
//passar como props setState dos objetos das bolinha amarela
function OutsideDot({setChord, chord, position}) {

const [buttonState, setButtonState] = useState("S0");
let auxChord = chord;

function handleButtonChange() {
    if (buttonState === "S0") {
        setButtonState("S2"); 
        auxChord[position] = true;
        setChord(auxChord);
    }
    else if (buttonState === "S2") {
        setButtonState("S1");
        auxChord[position] = true;
        setChord(auxChord);
    }
    else if (buttonState === "S1") {
        setButtonState("S0");
        auxChord[position] = false;
        setChord(auxChord);
    }
}

// function selectAllDots() {
//     if (buttonState === "up" || buttonState === "down") setDotState("selected")
// }


    return(
        <Button onClick={handleButtonChange} state={buttonState}>
            {buttonState === "S2" && <FaArrowUp/>}
            {buttonState === "S1" && <FaArrowDown/>}
        </Button>
    )
}

export default OutsideDot;