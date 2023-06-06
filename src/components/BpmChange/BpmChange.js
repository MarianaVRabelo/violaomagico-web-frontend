import React, { useState } from "react";
import { Container, BpmValueText, BpmInput } from "./Styles";

function BpmChange() {
  const [BpmValue, setBpmValue] = useState();

  const handleBpmChange = (event) => {
    setBpmValue(event.target.value);
  };

  const handleBpmClick = () => {
    setBpmValue(BpmValue);
  };

  return (
    <Container>
      <BpmValueText>Valor do BPM: {BpmValue}</BpmValueText>
      <BpmInput type="text" value={BpmValue} onChange={handleBpmChange} />
    </Container>
  );
}

export default BpmChange;
