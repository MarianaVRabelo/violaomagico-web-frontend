import { useState } from "react";
import { ButtonDots } from "./Styles";

function Dots() {
  const [buttonState, setButtonState] = useState("empty");

  function handleButtonChange() {
    if (buttonState === "empty") setButtonState("selected");
    else if (buttonState === "selected") setButtonState("empty");
  }

  return (
    <ButtonDots onClick={handleButtonChange} state={buttonState}></ButtonDots>
  );
}

export default Dots;
