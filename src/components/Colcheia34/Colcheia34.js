import {
  ButtonMatrixContainer34,
  StyledMatrixButton34,
} from "../../pages/CreateMusic/Styles";

const RowLetters = ["E", "A", "D", "G", "B", "e"];

function Colcheia34({ selectedButtons, handleButtonMatrixClick }) {
  return (
    <ButtonMatrixContainer34>
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 24 }).map((_, col) => {
          const buttonId = row * 24 + col + 1;
          const rowLetter = RowLetters[row]; // Correção aqui
          return (
            <StyledMatrixButton34
              key={buttonId}
              id={`button-${buttonId}`}
              isSelected={selectedButtons[buttonId] || false}
              onClick={() => handleButtonMatrixClick(buttonId, rowLetter)}
            >
              {rowLetter}
            </StyledMatrixButton34>
          );
        })
      )}
    </ButtonMatrixContainer34>
  );
}

export default Colcheia34;
