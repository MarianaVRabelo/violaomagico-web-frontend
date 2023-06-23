import React, { useState } from "react";
import { Container, TitleText, TitleInput } from "./Styles";

 const TitleChange = ({ titleName, setTitleName,handleTitleNameClick }) => {
  
  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitleName(value);
    
  };

  return (
    <Container>
      <TitleText>Nome da Musica: {titleName}</TitleText>
      <TitleInput type="text" value={titleName} onChange={handleTitleChange} /> 
      {/* Adicione o texto adicional desejado aqui */}
    </Container>
  );
};

export default TitleChange;
