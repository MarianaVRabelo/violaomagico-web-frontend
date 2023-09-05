import { ButtonMatrixContainer, StyledMatrixButton } from "./Styles";

function NewLogic({ handleButtonMatrixClick3, selectedButtons3 }) {
  const rowLetters = ["E", "A", "D", "G", "B", "e"];

  return (
    <ButtonMatrixContainer>
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 24 }).map((_, col) => {
          const buttonId = row * 24 + col + 1;
          const rowLetter = rowLetters[row];
          return (
            <StyledMatrixButton
              key={buttonId}
              id={`button-${buttonId}`}
              isSelected={selectedButtons3[buttonId] || false}
              onClick={() => handleButtonMatrixClick3(buttonId, rowLetter)}
            >
              {rowLetter}
            </StyledMatrixButton>
          );
        })
      )}
    </ButtonMatrixContainer>
  );
}

export default NewLogic;
