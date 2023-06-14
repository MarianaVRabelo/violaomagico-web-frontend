import React, { useState } from "react";
import { Container, TitleText, TitleInput } from "./Styles";

 const TitleChange = ({ titleName, setTitleName }) => {
  
  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitleName(value);
    
  };

  return (
    <Container>
      <TitleText>Nome: {titleName}</TitleText>
      <TitleInput type="text" value={titleName} onChange={handleTitleChange} />
    </Container>
  );
};

export default TitleChange;
