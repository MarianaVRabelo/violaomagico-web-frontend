import styled from "styled-components";
import { Fonts } from "../variables";

const Button = styled.button`
  /*Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /*Medidas*/
  border-radius: 3px;
  margin-top: ${(props) => props.marginTop ?? "2%"};
  margin-left: ${(props) => props.marginLeft};
  min-width: ${(props) => props.minWidth};

  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  column-gap: ${(props) => props.columnGap};
  /*cor e estilo do botão*/
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  cursor: pointer;
  /*características do texto*/
  font-family: ${Fonts.roboto};
  font-size: ${(props) => props.fontSize};
  text-decoration: ${(props) => props.textDecoration};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};

  @media (max-width: 700px) {
    width: 100%;
    height: ${(props) => props.heightMedia560};
  }

  @media (max-width: 600px) {
    width: ${(props) => props.widthMedia600};
  }
  @media (max-width: 920px) {
    height: ${(props) => props.heightMedia920};
  }

  @media (max-width: 670px) {
    width: ${(props) => props.widthMedia670};
  }

  @media (max-width: 640px) {
    height: ${(props) => props.heightMedia640};
  }

  @media (max-width: 800px) {
    margin-top: ${(props) =>
      props.marginTopMedia ?? ((props) => props.marginTop ?? "2%")};
  }

  @media (max-width: 1080px) {
    font-size: ${(props) => props.fontSizeMedia1080};
  }

  @media (max-width: 950px) and (min-width: 480px) {
    font-size: ${(props) => props.fontSizeMedia950};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.fontSizeMedia480};
  }
  @media (max-width: 376px) {
    width: ${(props) => props.widthres};
  }
  @media (max-width: 571px) {
    width: ${(props) => props.widthres};
  }
  @media (max-width: 700px) {
    width: ${(props) => props.widthMedia700};
  }
  @media (max-width: 281px) {
    width: ${(props) => props.widthMedia281};
  }
  @media (max-width: 415px) {
    width: ${(props) => props.widthMedia415};
  }
`;
export default Button;
