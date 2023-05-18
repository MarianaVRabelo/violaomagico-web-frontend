import { useState } from "react";
import { Button } from "./Styles";

function Dots() {
    const [buttonState, setButtonState] = useState("empty");

	function handleButtonChange() {
		if (buttonState === "empty") setButtonState("selected"); 
		else if (buttonState === "selected") setButtonState("empty");
	}

	return (
		<Button onClick={handleButtonChange} state={buttonState}>
		</Button>
	);

}

export default Dots;