import React, { useState } from "react";
import { Container, AuthorText, AuthorInput } from "./Styles";

function AuthorChange({author, setAuthor}) {
  

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <Container>
      <AuthorText>Autor: {author}</AuthorText>
      <AuthorInput type="text" value={author} onChange={handleAuthorChange} />
    </Container>
  );
}

export default AuthorChange;
