import { useState } from "react";
import { Button } from "./Styles";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function WeirdButton() {
	const [buttonState, setButtonState] = useState("empty");

	function handleButtonChange() {
		if (buttonState === "empty")
			setButtonState(
				"up"
			); //passar como props setState dos objetos das bolinha amarela
		else if (buttonState === "up") setButtonState("down");
		else if (buttonState === "down") setButtonState("empty");
	}

	return (
		<Button onClick={handleButtonChange} state={buttonState}>
			{buttonState === "up" && <FaArrowUp />}
			{buttonState === "down" && <FaArrowDown />}
		</Button>
	);
}

export default WeirdButton;
