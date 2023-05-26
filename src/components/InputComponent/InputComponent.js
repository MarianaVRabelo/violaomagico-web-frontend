import React from "react";
import { StyledInput } from "../InputComponent/Styles";

const InputComponent = () => {
  return (
    <div>
      <label>Digite algo: 
        (MUDAR FUNCIONAMENTO DO COMPONENTE)
      </label>
      <StyledInput type="text" />
    </div>
  );
};

export default InputComponent;

/*O COMPONENTE ESTÁ CRIADO E ESTILIZADO MAS SEU FUNCIONAMENTO NÃO ESTÁ IMPLEMENTADO
A IDEIA É SER UM COMPONENTE QUE SEJA CAPAZ DE SER LIDO E ATUALIZE O VALOR DO BPM, NOME 
E AUTOR DA MUSICA COMO JA ACONTECE NO INPUT PADRAO DE CADA UM DOS COMPONENTES*/