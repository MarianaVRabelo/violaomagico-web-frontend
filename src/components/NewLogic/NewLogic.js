import React, { useState, useEffect } from "react";
import { ButtonMatrixContainer, StyledMatrixButton } from "./Styles";

function NewLogic({ deselectButtons }) {
  const [selectedButtons, setSelectedButtons] = useState({});
  const rowLetters = ["E", "A", "D", "G", "B", "e"];

  // const handleDeletarBatida = () => {
  //   const updatedSelectedButtons = Object.keys(selectedButtons).reduce(
  //     (updatedButtons, buttonId) => {
  //       updatedButtons[buttonId] = false;
  //       return updatedButtons;
  //     },
  //     {}
  //   );

  const handleButtonMatrixClick = (buttonId, rowLetter) => {
    setSelectedButtons((prevSelectedButtons) => ({
      ...prevSelectedButtons,
      [buttonId]: !prevSelectedButtons[buttonId],
    }));
  };

  useEffect(() => {
    updateSelectedBatidaString();
  }, [selectedButtons]);

  const updateSelectedBatidaString = () => {
    const selectedButtonIds = Object.keys(selectedButtons).filter(
      (buttonId) => selectedButtons[buttonId]
    );

    const buttonColumns = Array.from({ length: 24 }, (_, col) =>
      selectedButtonIds.filter((buttonId) => (buttonId - 1) % 24 === col)
    );

    const groupedButtonColumns = [];
    for (let i = 0; i < buttonColumns.length; i += 6) {
      const group = buttonColumns.slice(i, i + 6);
      groupedButtonColumns.push(group);
    }

    const selectedBatidaString = groupedButtonColumns
      .map((group) => {
        const groupValues = group.map((column) => {
          const rowValues = column
            .map((buttonId) => {
              if (selectedButtons[buttonId]) {
                const rowLetter = rowLetters[Math.floor((buttonId - 1) / 24)];
                return rowLetter;
              }
              return null;
            })
            .filter((value) => value !== null);

          return rowValues.join("");
        });

        return `<${groupValues.join(" ")}>`.trim();
      })
      .join(" ");
    console.log(selectedBatidaString);
  };

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

export default NewLogic;
