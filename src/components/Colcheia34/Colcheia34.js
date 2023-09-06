import {
  ButtonMatrixContainer34,
  Container34,
  ContainerLetter34,
  Letter34,
  Line34,
  StyledMatrixButton34,
} from "../../pages/CreateMusic/Styles";

function Colcheia34({ handleButtonMatrixClick3, selectedButtons3 }) {
  const rowLetters = ["E", "A", "D", "G", "B", "e"];

  return (
    <Container34>
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
              >
                <Line34 />
              </StyledMatrixButton34>
            );
          })
        )}
      </ButtonMatrixContainer34>
    </Container34>
  );
}

export default Colcheia34;
