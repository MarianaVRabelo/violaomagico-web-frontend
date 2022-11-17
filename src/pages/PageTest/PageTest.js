import React, { useState } from "react";
import CreateMusic from "../../components/CreateMusic/CreateMusic";
import {
    BotaoNovaBatida,
    Container,
  } from "./Styles";

function Test() {

    const [ createMusic, setCreateMusic ] = useState([<CreateMusic key={0} />]);

    let handleAddComponent = (e) => {
        e.preventDefault()
        setCreateMusic([...createMusic,<CreateMusic key={createMusic.length} />]);
    }

    return (
        <Container>
           {createMusic}
           <BotaoNovaBatida onClick={handleAddComponent}>NOVA LINHA</BotaoNovaBatida>
        </Container>
    );
}

export default Test;