import React from "react";
import {
  ButtonMatrixContainer,
  StyledMatrixButton,
} from "../../pages/CreateMusic/Styles";

const RowLetters = ["E", "A", "D", "G", "B", "e"];

function Colcheia44({ selectedButtons, handleButtonMatrixClick }) {
  return (
    <ButtonMatrixContainer>
      {RowLetters.map((rowLetter, row) =>
        Array.from({ length: 32 }).map((_, col) => {
          const buttonId = row * 32 + col + 1;

          return (
            <StyledMatrixButton
              key={buttonId}
              id={`button-${buttonId}`}
              isSelected={selectedButtons[buttonId] || false}
              onClick={() => handleButtonMatrixClick(buttonId, rowLetter)}
            >
              {rowLetter}
            </StyledMatrixButton>
          );
        })
      )}
    </ButtonMatrixContainer>
  );
}

export default Colcheia44;
