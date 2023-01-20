import React from "react";
import {
    Title,
    Data,
    Modal,
    Batidas,
    BpmSelector,
    Music,
    Paginao,
    Tab,
} from "./Styles";

import Plus from '../../assets/Plus.png';

import Button from '../../styles/Button';
import { useState } from "react";
import { useEffect } from "react";
import { Colors } from "../../variables";



function CreateMusic() {

    const first = { add: true }, second = {}, third = {};

    const [batidas, setBatidas] = useState([first, second, third]);
    const [batidaPressed, setBatidaPressed] = useState(false);
    const [tabBackgroundColor, setTabBackgroundColor] = useState("");
    const [selected, setSelected] = useState(null)

    function newbatida(index) {
        const batidaAdded = { pressed: true };
        setBatidas([batidaAdded, ...batidas.slice(0, 2)]);
        setBatidaPressed(true);
        setSelected(index);
    };

    //console.log(selected)

    // function handleColorChange () {
    //     const batidaClicked = { pressed: true };
    //     if(batidaClicked === true){
    //         setTabBackgroundColor(`${Colors.darkwood}`);
    //     }
    //     if(batidaClicked === false){
    //         setTabBackgroundColor(`${Colors.blackwood}`);
    //     }


    // }


    useEffect(() => {
        // console.log(batidas);
    }, [batidas]);

    return (
        <Paginao>
            <Modal>
                <Title> CRIAÇÃO DA MÚSICA </Title>
                <Data>
                    <div id="fields">
                        <label>Título: </label>
                        <input type="text" className="título"></input><br />
                    </div>
                    <div id="fields">
                        <label>Autor: </label>
                        <input type="text" className="autor"></input><br />
                    </div>
                    <div id="fields">
                        <label>BPM: </label>
                        <input type="text" className="bpm"></input>
                    </div>
                </Data >
                <BpmSelector>
                    <option value=''>  Tamanho do passo  </option>
                    <option value='3'>  3 divisões  </option>
                    <option value='4'>  4 divisões  </option>
                </BpmSelector>
            </Modal>
            <Batidas>
                {batidas.map((batida, index) => (
                    batida?.pressed === true ? (
                        <Tab
                            backgroundColor = {index === selected ? Colors.darkwood : Colors.blackwood}
                            onClick={() => setSelected(index)}
                            color="white"  
                            fontWeight="700"
                            selected= {index === selected}
                            style= {{cursor : "pointer" }}
                            key={index}
                        >
                            Batida {batidas.findIndex((b)=> b === batida) + 1}
                        </Tab>
                    ) : (
                        batida?.add === true ? (
                            <Tab
                                backgroundColor={Colors.darkwood}
                                selected= {false}
                                key={index}
                            >
                                <Button
                                    onClick={() => newbatida(index)}
                                    width = "60%"
                                    height = "80%"
                                    backgroundColor="#F4F4F4"
                                    border="1px solid black"
                                    color="black"
                                    fontWeight="700"
                                    columnGap= "10px"
                                    fontSize="18px"
                                    fontSizeMedia1080="12px"
                                    fontSizeMedia950="12px"
                                >
                                    <img src={Plus} className="plus" alt="plusSymbol" width="15" height="15"></img>
                                    NOVA BATIDA
                                </Button>
                            </Tab>
                        ) : (
                            <Tab
                                backgroundColor={Colors.darkwood}
                                key={index}
                            />
                        )
                    )
                ))
                }
            </Batidas >
            <Music>
                {batidaPressed ? (
                    <Button
                        width="20%"
                        backgroundColor="#F4F4F4"
                        border="1px solid black"
                        color="black"
                        fontWeight="700"
                        columnGap= "10px"
                        padding="5px"
                        fontSize="14px"
                        widthMedia700="20%"
                        widthMedia281="60%"
                        widthMedia415="40%"
                    >
                        ENCERRAR
                    </Button>
                ) : console.log("")}
            </Music>
        </Paginao >
    )
}

export default CreateMusic;

                    // {batidas.map((batida) => (
                    //     <>
                    //         <Button
                    //             width="50%"
                    //             height="80%"
                    //             backgroundColor="transparent"
                    //             onClick={() => newbatida()}
                    //         >
                    //             aklsdjfh
                    //         </Button>
                    //     </>
                    // ))
                    // }