import React, { useState } from "react";
import { Container, TitleText, TitleInput } from "./Styles";

function TitleChange() {
  const [titleName, setTitleName] = useState("");

  const handleTitleChange = (event) => {
    setTitleName(event.target.value);
  };

  return (
    <Container>
      <TitleText>Nome da Musica: {titleName}</TitleText>
      <TitleInput type="text" value={titleName} onChange={handleTitleChange} /> 
      {/* Adicione o texto adicional desejado aqui */}
    </Container>
  );
}

export default TitleChange;
