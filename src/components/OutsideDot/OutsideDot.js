import React, { useState } from "react";
import {
    Button,
  } from "./Styles";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function OutsideDot({setChord, chord, position}) {

const [buttonState, setButtonState] = useState("empty");
let auxChord = chord;

function handleButtonChange() {
    if (buttonState === "empty") {
        setButtonState("s");
        Object.keys(auxChord[position]).forEach((key) => {
            if (key !== 'flow') auxChord[position][key] = true;
            else auxChord[position][key] = 's';
          });
        setChord(auxChord);
    }
    else if (buttonState === "s") {
        setButtonState("d");
        Object.keys(auxChord[position]).forEach((key) => {
            if (key !== 'flow') auxChord[position][key] = true;
            else auxChord[position][key] = 'd';
          });
        setChord(auxChord);
    }
    else if (buttonState === "d") {
        setButtonState("empty");
        Object.keys(auxChord[position]).forEach((key) => {
            if (key === 'flow') auxChord[position][key] = ' ';
          });
        setChord(auxChord);
    }
}


// function selectAllDots() {
//     if (buttonState === "up" || buttonState === "down") setDotState("selected")
// }


    return(
        <Button onClick={handleButtonChange} state={buttonState}>
            {buttonState === "s" && <FaArrowUp/>}
            {buttonState === "d" && <FaArrowDown/>}
        </Button>
    )
}

export default OutsideDot;