import styled from "styled-components";

export const StyledMatrixButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  border: none;
  border-radius: 50%; /* Make the buttons round */
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonMatrixContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 5px;
  margin-top: 20px;
`;
