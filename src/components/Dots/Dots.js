import React, { useState } from "react";
import {
    Dot,
  } from "./Styles";

function Dots({setChord, chord, position, note}) {

    const [dotState, setDotState] = useState("")
    let auxChord = chord;

    function handleDotChange() {
        if (dotState === "") {
            setDotState("selected");
            auxChord[position][note] = true;
            setChord(auxChord);
        }
        else if (dotState === "selected") {
            setDotState("");
            auxChord[position][note] = false;
            setChord(auxChord);
        }
    }

    return(
        <Dot onClick={handleDotChange} state={dotState}/>
    )
}

export default Dots;