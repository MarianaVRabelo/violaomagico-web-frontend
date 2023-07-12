import { Line, ContainerColumn } from "./Styles";
import Dots from "../Dots/Dots";
import { useState } from "react";

function Column() {
  const [pressedDots, setPressedDots] = useState("");

  function handleDotClick(id, isSelected) {
    if (isSelected) {
      setPressedDots((prevDots) => prevDots.concat(id));
      console.log(`Dots ${id} foi clicado!`);
    } else {
      setPressedDots((prevDots) => prevDots.replace(id, ""));
      console.log(`${id} despressionado`);
    }
    console.log("Botões clicados:", pressedDots);
  }

  return (
    <ContainerColumn>
      <Line>
        <Dots id={"E"} onDotClick={handleDotClick} />
      </Line>
      <Line>
        <Dots id={"A"} onDotClick={handleDotClick} />
      </Line>
      <Line>
        <Dots id={"D"} onDotClick={handleDotClick} />
      </Line>
      <Line>
        <Dots id={"G"} onDotClick={handleDotClick} />
      </Line>
      <Line>
        <Dots id={"B"} onDotClick={handleDotClick} />
      </Line>
      <Line>
        <Dots id={"e"} onDotClick={handleDotClick} />
      </Line>
    </ContainerColumn>
  );
}

export default Column;
