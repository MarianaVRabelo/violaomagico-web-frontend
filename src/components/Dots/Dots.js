import { useState } from "react";
import { ButtonDots } from "./Styles";

function Dots() {
  const [buttonState, setButtonState] = useState("empty");

  function handleButtonChange() {
    if (buttonState === "empty") {
    setButtonState("selected");
    console.log("Button 1 pressed: Hello");
    }
    else if (buttonState === "selected") {
      setButtonState("empty");
      console.log("Button 2 pressed: Hello");
    }
  }

  return (
    <ButtonDots onClick={handleButtonChange} state={buttonState}></ButtonDots>
  );
}

export default Dots;
