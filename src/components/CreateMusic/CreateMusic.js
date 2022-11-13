import React, { useEffect, useState } from "react";
import {
    Body,
    GuitarNeck,
    GuitarStrings,
    String,
    GuitarFrets,
    Fret,
    BotaoNovaBatida,
    Line,
    OutsideDots,
    ContainerOutsideDots
  } from "./Styles";
import OutsideDot from "../OutsideDot/OutsideDot";
import Dots from "../Dots/Dots";
import { defaultChord } from "../../utils/ChordUtils";


function CreateMusic() {

    const [ chord, setChord ] = useState(defaultChord);

        return(
            <Body>
                <GuitarNeck>
                    <GuitarStrings>
                        <String>e</String>
                        <String>B</String>
                        <String>G</String>
                        <String>D</String>
                        <String>A</String>
                        <String>E</String>
                    </GuitarStrings>
                    <GuitarFrets>
                        <Fret>
                        <Line><Dots setChord={setChord} chord={chord} position={0} note="e"/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots setChord={setChord} chord={chord} position={0} note="B"/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots setChord={setChord} chord={chord} position={0} note="G"/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots setChord={setChord} chord={chord} position={0} note="D"/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots setChord={setChord} chord={chord} position={0} note="A"/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots setChord={setChord} chord={chord} position={0} note="E"/><Dots/><Dots/><Dots/></Line>
                        </Fret>
                        <Fret>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        </Fret>
                        <Fret>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        </Fret>
                        <Fret>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        <Line><Dots/><Dots/><Dots/><Dots/></Line>
                        </Fret>
                    </GuitarFrets>
                </GuitarNeck>
                <ContainerOutsideDots>
                <OutsideDots><OutsideDot setChord={setChord} chord={chord} position={0}/><OutsideDot/><OutsideDot/><OutsideDot/></OutsideDots>
                <OutsideDots><OutsideDot/><OutsideDot/><OutsideDot/><OutsideDot/></OutsideDots>
                <OutsideDots><OutsideDot/><OutsideDot/><OutsideDot/><OutsideDot/></OutsideDots>
                <OutsideDots><OutsideDot/><OutsideDot/><OutsideDot/><OutsideDot/></OutsideDots>
                </ContainerOutsideDots>
                <BotaoNovaBatida onClick={() => console.log(chord)}>NOVA BATIDA</BotaoNovaBatida>
            </Body>
        );
}

export default CreateMusic;