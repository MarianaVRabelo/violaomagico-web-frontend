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

    function newbatida() {
        const batidaAdded = { pressed: true };
        setBatidas([batidaAdded, ...batidas.slice(0, 2)]);
        setBatidaPressed(true);
    };

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
                {batidas.map((batida) => (
                    batida?.pressed === true ? (
                        <Tab
                            backgroundColor={Colors.darkwood}
                            onClick={() => (console.log("!"))}
                            color="white"  
                            fontWeight="100"
                        >
                            Batida {batidas.findIndex((b)=> b === batida) + 1}
                        </Tab>
                    ) : (
                        batida?.add === true ? (
                            <Tab
                                backgroundColor={Colors.musg}
                            >
                                <Button
                                    onClick={() => newbatida()}
                                    width = "60%"
                                    backgroundColor="transparent"
                                    border="1px solid black"
                                    color="white"
                                    fontWeight="700"
                                    columnGap= "10px"
                                    fontSize="20px"
                                    fontSizeMedia1080="14px"
                                    fontSizeMedia950="10px"
                                >
                                    <img src={Plus} className="plus" alt="plusSymbol"></img>
                                    NOVA BATIDA
                                </Button>
                            </Tab>
                        ) : (
                            <Tab
                                backgroundColor={Colors.darkwood}
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
                        backgroundColor="transparent"
                        border="1px solid white"
                        color="white"
                        fontWeight="700"
                        columnGap= "10px"
                        padding="5px"
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