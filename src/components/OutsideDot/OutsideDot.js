import React, { useEffect, useState } from "react";
import {
    Button,
  } from "./Styles";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function OutsideDot({setChord, chord, position}) {

let auxChord = chord;
const [ rerender, setRerender ] = useState(true);

useEffect(() => {
  setChord(auxChord)
},[auxChord]);

function handleButtonChange() {
    if (auxChord[position].flow === "empty") {
        Object.keys(auxChord[position]).forEach((key) => {
            if (key !== "flow") auxChord[position][key] = true;
            else auxChord[position][key] = "s";
          });      
    }
    else if (auxChord[position].flow === "s") {
        Object.keys(auxChord[position]).forEach((key) => {
            if (key !== "flow") auxChord[position][key] = true;
            else auxChord[position][key] = "d";
          });
    }
    else if (auxChord[position].flow === "d") {
        Object.keys(auxChord[position]).forEach((key) => {
          if (key !== "flow") auxChord[position][key] = false;
          else auxChord[position][key] = "empty";
          });
    }
    setRerender(!rerender);
}

    return(
        <Button onClick={handleButtonChange} state={(auxChord[position].flow)}>
            {auxChord[position].flow === "s" && <FaArrowUp/>}
            {auxChord[position].flow === "d" && <FaArrowDown/>}
        </Button>
    )
}

export default OutsideDot;