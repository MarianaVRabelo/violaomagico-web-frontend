import React, { useState } from "react";
import CreateMusic from "../../components/CreateMusic/CreateMusic";
import {
    BotaoNovaBatida,
    Container,
  } from "./Styles";

function Test() {

    


    return (
        <Container>
           <CreateMusic/>
           <BotaoNovaBatida onClick={() => {console.log()}}>NOVA BATIDA</BotaoNovaBatida>
        </Container>
    );
}

export default Test;