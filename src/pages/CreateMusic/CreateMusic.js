import React, { useState, useMemo, useEffect } from "react";
import {
  Modal,
  Batidas,
  Music,
  Paginao,
  Tab,
  ValorBatidaText,
  DivBotoesBatida,
  BotaoSalvar,
  BotaoDeletar,
  SelectBatida,
  CompassChange,
} from "./Styles";
import Plus from "../../assets/Plus.png";
import styled from "styled-components";
import Button from "../../styles/Button";
import { saveAs } from "file-saver";
import { Colors } from "../../styles/variables";
import BpmChange from "../../components/BpmChange/BpmChange";
import TitleChange from "../../components/TitleChange/TitleChange";
import AuthorChange from "../../components/AuthorChange/AuthorChange";
import CreateMusicColcheia34 from "../../components/CreateMusicColcheia34/CreateMusicColcheia34";
import CreateMusicColcheia from "../../components/CreateMusicColcheia/CreateMusicColcheia";
import Colcheia44 from "../../components/Colcheia44/Colcheia44";
import Colcheia34 from "../../components/Colcheia34/Colcheia34";

function CreateMusic() {
  const [selectedBatidaString, setSelectedBatidaString] = useState("");
  const [selectedBatida, setSelectedBatida] = useState("Batida 1");
  const [salvarLabel, setSalvarLabel] = useState("Salvar Batida 1");
  const [deletarLabel, setDeletarLabel] = useState("Deletar Batida 1");

  const [batida1, setBatida1] = useState();
  const [batida2, setBatida2] = useState();
  const [batida3, setBatida3] = useState();
  const [selectedButtons3, setSelectedButtons3] = useState({});

  const [selectedButtons, setSelectedButtons] = useState({});
  const [selectedButtonInfo, setSelectedButtonInfo] = useState({
    buttonId: null,
    rowLetter: "",
  });
  //3/4
  const rowLetters = ["E", "A", "D", "G", "B", "e"];

  const handleButtonMatrixClick3 = (buttonId, rowLetter) => {
    setSelectedButtons3((prevSelectedButtons) => ({
      ...prevSelectedButtons,
      [buttonId]: !prevSelectedButtons[buttonId],
    }));

    setSelectedButtonInfo({ buttonId, rowLetter }); // Atualizar o estado fora do loop
  };
  const handleSalvarBatida3 = () => {
    const selectedButtonIds = Object.keys(selectedButtons3).filter(
      (buttonId) => selectedButtons3[buttonId]
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
              if (selectedButtons3[buttonId]) {
                const rowLetter = rowLetters[Math.floor((buttonId - 1) / 24)];
                return rowLetter;
              }
              return null; // Retorna null para botões não selecionados
            })
            .filter((value) => value !== null); // Filtra os valores nulos

          return rowValues.join("");
        });

        return groupValues.join(" ");
      })
      .join(" ");

    // Adicione os símbolos "<>" fora do mapeamento
    const formattedSelectedBatidaString = `< ${selectedBatidaString} >`;

    // Atualize o estado com a saída formatada dos botões selecionados
    setSelectedBatidaString(formattedSelectedBatidaString);

    // Defina os valores das variáveis batida1, batida2 ou batida3
    if (selectedBatida === "Batida 1") {
      setBatida1(formattedSelectedBatidaString);
      console.log(formattedSelectedBatidaString);
    } else if (selectedBatida === "Batida 2") {
      setBatida2(formattedSelectedBatidaString);
    } else if (selectedBatida === "Batida 3") {
      setBatida3(formattedSelectedBatidaString);
    }
  };

  //4/4

  const handleButtonMatrixClick = (buttonId, row) => {
    setSelectedButtons((prevSelectedButtons) => ({
      ...prevSelectedButtons,
      [buttonId]: !prevSelectedButtons[buttonId],
    }));

    setSelectedButtonInfo({ buttonId, rowLetter: row }); // Atualize o estado fora do loop
  };

  const handleSalvarBatida = () => {
    const selectedButtonIds = Object.keys(selectedButtons).filter(
      (buttonId) => selectedButtons[buttonId]
    );

    const columns = Array.from({ length: 32 }, (_, col) => {
      const columnValue = rowLetters
        .map((rowLetter) => {
          const buttonId = selectedButtonIds.find(
            (id) =>
              (id - 1) % 32 === col &&
              rowLetter === rowLetters[Math.floor((id - 1) / 32)]
          );

          return buttonId ? rowLetter : " ";
        })
        .join("");

      return columnValue.trim(); // Remova os espaços em branco no início e no final
    });

    const selectedBatidaString = `<${columns.join(" ")}>`;

    // Atualize o estado com a saída formatada dos botões selecionados
    setSelectedBatidaString(selectedBatidaString);

    // Defina os valores das variáveis batida1, batida2 ou batida3
    if (selectedBatida === "Batida 1") {
      setBatida1(selectedBatidaString);
      console.log(selectedBatidaString);
    } else if (selectedBatida === "Batida 2") {
      setBatida2(selectedBatidaString);
    } else if (selectedBatida === "Batida 3") {
      setBatida3(selectedBatidaString);
    }
  };
  const handleDeletarBatida = () => {
    if (compasso === "3/4") {
      const updatedSelectedButtons3 = Object.keys(selectedButtons3).reduce(
        (updatedButtons, buttonId) => {
          updatedButtons[buttonId] = false;
          return updatedButtons;
        },
        {}
      );
      setSelectedButtons3(updatedSelectedButtons3);
      setBatida1(" ");
    } else if (compasso === "4/4") {
      const updatedSelectedButtons = Object.keys(selectedButtons).reduce(
        (updatedButtons, buttonId) => {
          updatedButtons[buttonId] = false;
          return updatedButtons;
        },
        {}
      );
      setSelectedButtons(updatedSelectedButtons);
      setBatida1(" ");
    }
  };
  useEffect(() => {
    updateButtonLabels();
  }, [selectedBatida]);

  const updateButtonLabels = () => {
    const salvarLabel = `Salvar ${selectedBatida}`;
    const deletarLabel = `Deletar ${selectedBatida}`;
    setSalvarLabel(salvarLabel);
    setDeletarLabel(deletarLabel);
  };

  const batidasQuantity = 1;
  const [batidas, setBatidas] = useState(
    Array(batidasQuantity).fill({ isCreated: false })
  );

  const [selectedBatidaIndex, setSelectedBatidaIndex] = useState(null);

  const [compasso, setCompasso] = useState("3/4");
  const [addNewBatidaIndex, setAddNewBatidaIndex] = useState(0);

  const [musicComponents, setMusicComponents] = useState(
    Array(batidasQuantity).fill([
      compasso === "3/4" ? <CreateMusicColcheia34 /> : <CreateMusicColcheia />,
    ])
  );
  useEffect(() => {
    setBatidas(Array(batidasQuantity).fill({ isCreated: false }));
    setMusicComponents(
      Array(batidasQuantity).fill([
        compasso === "3/4" ? (
          <CreateMusicColcheia34 />
        ) : (
          <CreateMusicColcheia />
        ),
      ])
    );
    setAddNewBatidaIndex(0);
    setSelectedBatidaIndex(null);
  }, [compasso]);

  const [batidaNumber, setBatidaNumber] = useState(0);

  // const handleBatidaNumber = (index) => {
  //   setBatidaNumber(index + 1);
  //   if (index === 0) {
  //     newBatida(index);
  //   } else if (index === 1) {
  //     newBatida2(index);
  //   } else if (index === 2) {
  //     newBatida3(index);
  //   }
  // };

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

  const handleDownload = () => {
    const blob = new Blob(
      [
        "V<",
        titleName,
        ">",
        "\nS<",
        BpmValue,
        ">",
        "\nN< ",
        author,
        ">",
        selectedBatidaString,
      ],
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
    if (selectedBatidaIndex !== null) {
      // Se uma batida estiver selecionada, exclua-a
      handleDeletarBatida();
    }

    // Limpar a seleção de botões
    if (tipoCompasso === "3/4") {
      setSelectedButtons3({});
    } else if (tipoCompasso === "4/4") {
      setSelectedButtons({});
    }

    setCompasso(tipoCompasso);
    setSelectedBatida("Batida 1");
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

  return (
    <Paginao>
      <Modal>
        <BpmChange BpmValue={BpmValue} setBpmValue={setBpmValue} />
        <TitleChange titleName={titleName} setTitleName={setTitleName} />
        <AuthorChange author={author} setAuthor={setAuthor} />
        {/*<InputComponent />*/}
        <CompassChange>Selecione o tipo de compasso:</CompassChange>
        <ButtonContainer>
          <Button
            onClick={() => handleSelecionarCompasso("3/4")}
            width="70px"
            height="40px"
            fontFamily="Quicksand"
            fontSize="20px"
            backgroundColor="white"
            selected={compasso === "3/4"}
            border="1px solid #000"
            borderRadius="4px"
            fontWeight="bold"
          >
            3/4
          </Button>
          <Button
            width="70px"
            height="40px"
            fontFamily="Quicksand"
            fontSize="20px"
            backgroundColor="white"
            onClick={() => handleSelecionarCompasso("4/4")}
            selected={compasso === "4/4"}
            border="1px solid #000"
            borderRadius="4px"
            fontWeight="bold"
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

          if (isAddNewBatida) {
            return (
              <AddNewBatidaComponent
                onClick={() => {
                  newBatida(index);
                }}
                // handleBatidaNumber={(index) => handleBatidaNumber(index)}
                index={index} // Passa o Ã­ndice para o componente
              />
            );
          }

          if (isCreated) {
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
          }

          return <Tab key={index} />;
        })}
      </Batidas>

      <Music>
        {hasCreatedBatida && (
          <>
            <ValorBatidaText>Valor da Batida 1: {batida1}</ValorBatidaText>
            <ValorBatidaText>Valor da Batida 2: {batida2}</ValorBatidaText>
            <ValorBatidaText>Valor da Batida 3: {batida3}</ValorBatidaText>
            {compasso === "4/4" ? (
              <Colcheia44
                selectedButtons={selectedButtons}
                handleButtonMatrixClick={handleButtonMatrixClick}
              />
            ) : (
              <Colcheia34
                selectedButtons3={selectedButtons3}
                handleButtonMatrixClick3={handleButtonMatrixClick3}
              />
            )}
            {selectedMusicComponents}

            <DivBotoesBatida>
              <SelectBatida
                id="selectBatida"
                value={selectedBatida}
                onChange={(e) => setSelectedBatida(e.target.value)}
              >
                <option value="Batida 1">Batida 1</option>
                <option value="Batida 2">Batida 2</option>
                <option value="Batida 3">Batida 3</option>
              </SelectBatida>
              <BotaoSalvar
                type="button"
                id="botaoSalvar"
                onClick={() =>
                  compasso === "3/4"
                    ? handleSalvarBatida3()
                    : handleSalvarBatida()
                }
              >
                {salvarLabel}
              </BotaoSalvar>
              <BotaoDeletar
                type="button"
                id="botaoDeletar"
                onClick={handleDeletarBatida}
              >
                {deletarLabel}
              </BotaoDeletar>
            </DivBotoesBatida>
          </>
        )}
      </Music>
    </Paginao>
  );
}
export default CreateMusic;

const CreatedBatidaComponent = ({ onClick, isSelected }) => (
  <Tab
    backgroundColor="{backgroundColor}"
    onClick={onClick}
    color="white"
    fontWeight="700"
    isSelected={isSelected}
  >
    Batida
  </Tab>
);

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* EspaÃ§amento entre os botÃµes */
`;

const AddNewBatidaComponent = ({ onClick, handleBatidaNumber, index }) => (
  <Tab selectedBatidaIndex={false}>
    <Button
      onClick={() => {
        onClick();
        handleBatidaNumber(index); // Passa o Ã­ndice para a funÃ§Ã£o
      }}
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
      />
      Nova batida
    </Button>
  </Tab>
);
