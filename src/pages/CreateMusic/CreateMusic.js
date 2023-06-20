import React, { useState, useMemo, useEffect } from "react";
import {
  Title,
  /*Data,*/
  Modal,
  Batidas,
  BpmSelector,
  Music,
  Paginao,
  Tab,
  BotaoNovaLinha,
} from "./Styles";
import Plus from "../../assets/Plus.png";
import styled from "styled-components";
import Button from "../../styles/Button";
import { saveAs } from "file-saver";
import { Colors } from "../../styles/variables";
import CreateMusicComponent from "../../components/CreateMusic/CreateMusic";
import BpmChange from "../../components/BpmChange/BpmChange";
import TitleChange from "../../components/TitleChange/TitleChange";
import AuthorChange from "../../components/AuthorChange/AuthorChange";
import CreateMusicColcheia34 from "../../components/CreateMusicColcheia34/CreateMusicColcheia34";
import GuitarIcon from "../../assets/GuitarIcon";
/*import InputComponent from "../../components/InputComponent/InputComponent";*/
import CreateMusicColcheia from "../../components/CreateMusicColcheia/CreateMusicColcheia";


function CreateMusic() {
  const batidasQuantity = 3;
  const [batidas, setBatidas] = useState(
    Array(batidasQuantity).fill({ isCreated: false })
  );
  const [selectedBatidaIndex, setSelectedBatidaIndex] = useState(null);
  const [compasso, setCompasso] = useState("3/4");
  const [addNewBatidaIndex, setAddNewBatidaIndex] = useState(0);
  const [musicComponents, setMusicComponents] = useState(
    
    Array(batidasQuantity).fill([compasso === "3/4" ? <CreateMusicColcheia34 /> : <CreateMusicColcheia />])
  );
  useEffect(()=>{
    setBatidas(Array(batidasQuantity).fill({ isCreated: false }))
    setMusicComponents(Array(batidasQuantity).fill([compasso === "3/4" ? <CreateMusicColcheia34 /> : <CreateMusicColcheia />]))
    setAddNewBatidaIndex(0);
    setSelectedBatidaIndex(null);
  },[compasso])
  

  const addMusicComponent = () =>
    setMusicComponents((prevValue) =>
      prevValue.map((batidaMusicComponents, index) =>
        selectedBatidaIndex === index
          ? [...batidaMusicComponents, <CreateMusicColcheia34 />]
          : batidaMusicComponents
      )
    );

  const [titleName, setTitleName] = useState("");
  const [BpmValue, setBpmValue] = useState("");
  const [author, setAuthor] = useState("");

  console.log(TitleChange.titleName);

  const handleDownload = () => {
    const blob = new Blob(
      ["V<", titleName, ">", "\nS<", BpmValue, ">", "\nN< ", author, ">"],
      { type: "text/plain;charset=utf-8" }
    );
    saveAs(blob, titleName);
  };

  function newBatida(index) {
    const newBatidas = batidas.map((batida, i) =>
      i === index ? { isCreated: true } : batida
    );
    setBatidas(newBatidas);
    setSelectedBatidaIndex(index);
    setAddNewBatidaIndex(index + 1);
  }

  const hasCreatedBatida = useMemo(
    () => batidas.some(({ isCreated }) => isCreated),
    [batidas]
  );



  const handleSelecionarCompasso = (tipoCompasso) => {
    setCompasso(tipoCompasso);
  };

  const selectedMusicComponents = useMemo(() => {
    if (
      selectedBatidaIndex >= 0 &&
      selectedBatidaIndex < musicComponents.length
    ) {
      return musicComponents[selectedBatidaIndex];
    }
    return [];
  }, [selectedBatidaIndex, musicComponents]);

  //const selectedMusicComponents = musicComponents[selectedBatidaIndex];

  return (
    <Paginao>
      <Modal>
        <BpmChange BpmValue={BpmValue} setBpmValue={setBpmValue} />
        <TitleChange titleName={titleName} setTitleName={setTitleName} />
        <AuthorChange author={author} setAuthor={setAuthor} />
        {/*<InputComponent />*/}
        <h1>Selecione o tipo de compasso</h1>
        <ButtonContainer>
          <Button
            onClick={() => handleSelecionarCompasso("3/4")}
            width="70px"
            height="40px"
            fontFamily="Inter"
            fontSize="20px"
            backgroundColor="white"
            selected={compasso === "3/4"}
          >
            3/4
          </Button>
          <Button
            width="70px"
            height="40px"
            fontFamily="Inter"
            fontSize="20px"
            backgroundColor="white"
            onClick={() => handleSelecionarCompasso("4/4")}
            selected={compasso === "4/4"}
          >
            4/4
          </Button>
        </ButtonContainer>
        <h5 />
      </Modal>
 
      <Button
        width="200px"
        height="60px"
        fontFamily="Inter"
        fontSize="20px"
        backgroundColor="white"
        onClick={handleDownload}
      >
        Download
      </Button>

      <h6 />
      <Batidas>
        {batidas.map(({ isCreated }, index) => {
          const isAddNewBatida = index === addNewBatidaIndex;
          const isSelected = index === selectedBatidaIndex;

          if (isAddNewBatida)
            return (
              <AddNewBatidaComponent
                onClick={() => newBatida(index)}
                key={index}
              />
            );

          if (isCreated)
            return (
              <CreatedBatidaComponent
                backgroundColor={
                  isSelected ? Colors.darkwood : Colors.blackwood
                }
                onClick={() => setSelectedBatidaIndex(index)}
                index={index}
                key={index}
                isSelected={isSelected}
              />
            );

          return <Tab backgroundColor={Colors.darkwood} key={index} />;
        })}
      </Batidas>
      <Music>
        {hasCreatedBatida && (
          <>
            {/* {selectedMusicComponents.map((component, index) => (
              <React.Fragment key={index}>{component}</React.Fragment>
            ))} */}
            {selectedMusicComponents}
            {selectedMusicComponents.length < 5 && (
              <BotaoNovaLinha type="button" onClick={addMusicComponent}>
                Nova linha
              </BotaoNovaLinha>
            )}
            <Button
              width="20%"
              backgroundColor="#F4F4F4"
              border="1px solid black"
              color="black"
              fontWeight="700"
              columnGap="10px"
              padding="5px"
              fontSize="14px"
              widthMedia700="20%"
              widthMedia281="60%"
              widthMedia415="40%"
            >
              ENCERRAR
            </Button>
          </>
        )}
      </Music>
    </Paginao>
  );
}

export default CreateMusic;

const CreatedBatidaComponent = ({
  backgroundColor,
  onClick,
  isSelected,
  index,
}) => (
  <Tab
    backgroundColor="{backgroundColor}"
    onClick={onClick}
    color="white"
    fontWeight="700"
    isSelected={isSelected}
  >
    Batida {index + 1}
  </Tab>
);

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
`;

const AddNewBatidaComponent = ({ onClick }) => (
  <Tab backgroundColor={Colors.blackwood} selectedBatidaIndex={false}>
    {" "}
    <Button
      onClick={onClick}
      width="60%"
      height="80%"
      backgroundColor="white"
      border="1px solid black"
      color="black"
      fontWeight="700"
      columnGap="10px"
      fontSize="18px"
      fontSizeMedia1080="12px"
      fontSizeMedia950="12px"
      fontFamily="inter"
    >
      <img
        src={Plus}
        className="plus"
        alt="plusSymbol"
        width="15"
        height="15"
      ></img>
      Nova batida
    </Button>
  </Tab>
);
