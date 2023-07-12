import { useState } from "react";
import { ButtonDots } from "./Styles";

function Dots({ id, onDotClick }) {
  const [buttonState, setButtonState] = useState("empty");

  function handleButtonChange() {
    if (buttonState === "empty") {
      setButtonState("selected");
      onDotClick(id, true);
    } else if (buttonState === "selected") {
      setButtonState("empty");
      onDotClick(id, false);
    }
  }

  return (
    <ButtonDots onClick={handleButtonChange} state={buttonState}></ButtonDots>
  );
}

export default Dots;
