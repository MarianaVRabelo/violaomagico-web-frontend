import {
  BiggerC34,
  ButtonMatrixContainer34,
  Container34,
  ContainerLetter34,
  ContainerLine34,
  Letter34,
  Line34,
  StyledMatrixButton34,
} from "../../pages/CreateMusic/Styles";
import { Line } from "../Column/Styles";

function Colcheia34({ handleButtonMatrixClick3, selectedButtons3 }) {
  const rowLetters = ["E", "A", "D", "G", "B", "e"];

  return (
    <Container34>
      <Line />
      <ContainerLetter34>
        <Letter34>E</Letter34>
        <Letter34>A</Letter34>
        <Letter34>D</Letter34>
        <Letter34>G</Letter34>
        <Letter34>B</Letter34>
        <Letter34>E</Letter34>
      </ContainerLetter34>
      <ButtonMatrixContainer34>
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 24 }).map((_, col) => {
            const buttonId = row * 24 + col + 1;
            const rowLetter = rowLetters[row];
            return (
              <StyledMatrixButton34
                key={buttonId}
                id={`button-${buttonId}`}
                isSelected={selectedButtons3[buttonId] || false}
                onClick={() => handleButtonMatrixClick3(buttonId, rowLetter)}
              ></StyledMatrixButton34>
            );
            <Line34 />;
          })
        )}
        <BiggerC34>
          <ContainerLine34>
            <Line34 />
            <Line34 />
            <Line34 />
            <Line34 />
            <Line34 />
            <Line34 />
          </ContainerLine34>
        </BiggerC34>
        <div className="vertical-line-1"></div>
        <div className="vertical-line-2"></div>
        <div className="vertical-line-3"></div>
      </ButtonMatrixContainer34>
    </Container34>
  );
}

export default Colcheia34;
