import React from "react";
import {
    Title,
    CreateMusic,
    BpmSelector,
    
} from "./Styles";

function createMusic() {
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

        <div>
            <CreateMusic>
                <Title> CRIAÇÃO DA MÚSICA </Title>
                <BpmSelector></BpmSelector>
            </CreateMusic>
        </div>
    )
}

export default createMusic;