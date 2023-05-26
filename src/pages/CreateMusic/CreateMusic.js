import React, { useMemo } from "react";
import {
  Title,
  Data,
  Modal,
  Batidas,
  BpmSelector,
  Music,
  Paginao,
  Tab,
  BotaoNovoCompasso,
} from "./Styles";
import Plus from "../../assets/Plus.png";
import Button from "../../styles/Button";
import { useState } from "react";
import { Colors } from "../../variables";
import CreateMusicComponent from "../../components/CreateMusic/CreateMusic";
import BpmChange from "../../components/BpmChange/BpmChange";
import TitleChange from "../../components/TitleChange/TitleChange";
import AuthorChange from "../../components/AuthorChange/AuthorChange";
import InputComponent from "../../components/InputComponent/InputComponent";

function CreateMusic() {
  const batidasQuantity = 3;
  const [batidas, setBatidas] = useState(
    Array(batidasQuantity).fill({ isCreated: false })
  );
  const [selectedBatidaIndex, setSelectedBatidaIndex] = useState(null);
  const [addNewBatidaIndex, setAddNewBatidaIndex] = useState(0);
  const [musicComponents, setMusicComponents] = useState(
    Array(batidasQuantity).fill([<CreateMusicComponent />])
  );

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
  const addMusicComponent = () =>
    setMusicComponents((valorAnterior) =>
      valorAnterior.map((batidaMusicComponents, index) =>
        selectedBatidaIndex === index
          ? [...batidaMusicComponents, <CreateMusicComponent />]
          : batidaMusicComponents
      )
    );

  const selectedMusicComponents = musicComponents[selectedBatidaIndex];
  return (
    <Paginao>
      <Modal>
        <Title> CRIAÇÃO DA MÚSICA </Title>
        <Data>
          <div id="fields">
            <label>Título: </label>
            <input type="text" className="título"></input>
            <br />
          </div>
          <div id="fields">
            <label>Autor: </label>
            <input type="text" className="autor"></input>
            <br />
          </div>
          <div id="fields">
            <label>BPM: </label>
            <input type="text" className="bpm"></input>
          </div>
        </Data>
        <BpmSelector>
          <option value=""> Tamanho do passo </option>
          <option value="3"> 3 divisões </option>
          <option value="4"> 4 divisões </option>
        </BpmSelector>
        <BpmChange/>
        <TitleChange/>
        <AuthorChange/>
        <InputComponent/>
      </Modal>
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
            {selectedMusicComponents}
            {selectedMusicComponents.length < 5 && (
              <BotaoNovoCompasso type="button" onClick={addMusicComponent}>
                NOVA LINHA
              </BotaoNovoCompasso>
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
    backgroundColor={backgroundColor}
    onClick={onClick}
    color="white"
    fontWeight="700"
    isSelected={isSelected}
  >
    Batida {index + 1}
  </Tab>
);

const AddNewBatidaComponent = ({ onClick }) => (
  <Tab backgroundColor={Colors.darkwood} selectedBatidaIndex={false}>
    {" "}
    <Button
      onClick={onClick}
      width="60%"
      height="80%"
      backgroundColor="#F4F4F4"
      border="1px solid black"
      color="black"
      fontWeight="700"
      columnGap="10px"
      fontSize="18px"
      fontSizeMedia1080="12px"
      fontSizeMedia950="12px"
    >
      <img
        src={Plus}
        className="plus"
        alt="plusSymbol"
        width="15"
        height="15"
      ></img>
      NOVA BATIDA
    </Button>
  </Tab>
);
