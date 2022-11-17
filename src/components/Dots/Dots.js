import React, { useState } from "react";
import {
    Dot,
  } from "./Styles";

function Dots({setChord, chord, position, note}) {

    let auxChord = chord;

    const [ rerender, setRerender ] = useState(true);


    function handleDotChange() {
        if (!auxChord[position][note]) {
            auxChord[position][note] = true;
            setChord(auxChord);
        }
        else if (auxChord[position][note]) {
            auxChord[position][note] = false;
            setChord(auxChord);
        }
        setRerender(!rerender);
    }

    return(
        <Dot onClick={handleDotChange} state={auxChord[position][note]}/>
    )
}

export default Dots;