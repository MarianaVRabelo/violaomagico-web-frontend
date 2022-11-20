import React from "react";
import {
    Title,
    Data,
    Modal,
    Batidas,
    BpmSelector,
    Paginao,
} from "./Styles";

import Button from '../../styles/Button';
import { useState } from "react";
import { useEffect } from "react";
import { Colors } from "../../variables";



function CreateMusic() {

    const [batidas, setBatidas] = useState([]);

    function newbatida() {
        if (batidas.length < 3) {
            setBatidas(batidas.concat("alou"));
        }
    };

    useEffect(() => {
        console.log(batidas);
    }, [batidas]);

    return (
        // <body>
        //     <div id="createMusic">
        //         <div className="musicCreation">
        //             <strong>CRIAÇÃO DA MÚSICA</strong>
        //             <form>
        //                 <div id="fields">
        //                     <label>Título: </label>
        //                     <input type="text" className="título"></input><br />
        //                 </div>
        //                 <div id="fields">
        //                     <label>Autor: </label>
        //                     <input type="text" className="autor"></input><br />
        //                 </div>
        //                 <div id="fields">
        //                     <label>BPM: </label>
        //                     <input type="text" className="bpm"></input>
        //                 </div>
        //             </form >
        //             <select name="select">
        //                 <option value="valor1" selected> Tamanho do passo</option>
        //                 <option value="valor1">3 divisões</option>
        //                 <option value="valor2">4 divisões</option>
        //             </select>
        //         </div >
        //         <button>
        //             Nova Batida
        //         </button>
        //     </div>
        // </body >

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
            <Button
                onClick={() => newbatida()}
            >
                NOVA BATIDA
            </Button>
            {batidas.length !== 0 ? (
                <Button>
                    ENCERRAR
                </Button>
            ) : (
                <Button>
                </Button>
            )}
            <Batidas>
                {batidas.map((batida) => (
                    <>
                        <Button
                            width="100px"
                            background-color={Colors.gray}
                        >
                            aklsdjfh
                        </Button>
                    </>
                ))
                }
            </Batidas>
            <Button>
                NOVO MOVIMENTO
            </Button>
        </Paginao >
    )
}

export default CreateMusic;