import React, { useState } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";

function TitleChange() {
  const [titleName, setTitleName] = useState("");

  const handleTitleChange = (event) => {
    setTitleName(event.target.value);
  };

  return (
    <div>
      <p>Nome: {titleName}</p>
      <input className="inputTitle" type="text" value={titleName} onChange={handleTitleChange} /> 
      <p></p>  
    </div>
  );
}

export default TitleChange;
