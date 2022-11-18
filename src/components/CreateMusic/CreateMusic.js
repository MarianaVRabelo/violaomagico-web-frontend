import React, { useState } from "react";
import {
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

    // const [ rerender, setRerender ] = useState(true);

    // useEffect(() => {
    //     setRerender(!rerender);
    // },[rerender]);

        return(
            <>
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
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={0} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={1} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={2} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={3} note="e"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={0} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={1} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={2} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={3} note="B"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={0} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={1} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={2} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={3} note="G"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={0} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={1} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={2} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={3} note="D"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={0} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={1} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={2} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={3} note="A"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={0} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={1} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={2} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={3} note="E"/>
                            </Line>
                        </Fret>
                        <Fret>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={4} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={5} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={6} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={7} note="e"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={4} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={5} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={6} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={7} note="B"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={4} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={5} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={6} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={7} note="G"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={4} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={5} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={6} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={7} note="D"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={4} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={5} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={6} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={7} note="A"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={4} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={5} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={6} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={7} note="E"/>
                            </Line>
                        </Fret>
                        <Fret>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={8} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={9} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={10} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={11} note="e"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={8} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={9} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={10} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={11} note="B"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={8} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={9} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={10} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={11} note="G"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={8} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={9} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={10} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={11} note="D"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={8} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={9} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={10} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={11} note="A"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={8} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={9} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={10} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={11} note="E"/>
                            </Line>
                        </Fret>
                        <Fret>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={12} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={13} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={14} note="e"/>
                                <Dots setChord={setChord} chord={chord} position={15} note="e"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={12} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={13} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={14} note="B"/>
                                <Dots setChord={setChord} chord={chord} position={15} note="B"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={12} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={13} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={14} note="G"/>
                                <Dots setChord={setChord} chord={chord} position={15} note="G"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={12} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={13} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={14} note="D"/>
                                <Dots setChord={setChord} chord={chord} position={15} note="D"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={12} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={13} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={14} note="A"/>
                                <Dots setChord={setChord} chord={chord} position={15} note="A"/>
                            </Line>
                            <Line>
                                <Dots setChord={setChord} chord={chord} position={12} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={13} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={14} note="E"/>
                                <Dots setChord={setChord} chord={chord} position={15} note="E"/>
                            </Line>
                        </Fret>
                    </GuitarFrets>
                </GuitarNeck>
                <ContainerOutsideDots>
                    <OutsideDots>
                        <OutsideDot setChord={setChord} chord={chord} position={0}/>
                        <OutsideDot setChord={setChord} chord={chord} position={1}/>
                        <OutsideDot setChord={setChord} chord={chord} position={2}/>
                        <OutsideDot setChord={setChord} chord={chord} position={3}/>
                    </OutsideDots>
                    <OutsideDots>
                        <OutsideDot setChord={setChord} chord={chord} position={4}/>
                        <OutsideDot setChord={setChord} chord={chord} position={5}/>
                        <OutsideDot setChord={setChord} chord={chord} position={6}/>
                        <OutsideDot setChord={setChord} chord={chord} position={7}/>
                    </OutsideDots>
                    <OutsideDots>
                        <OutsideDot setChord={setChord} chord={chord} position={8}/>
                        <OutsideDot setChord={setChord} chord={chord} position={9}/>
                        <OutsideDot setChord={setChord} chord={chord} position={10}/>
                        <OutsideDot setChord={setChord} chord={chord} position={11}/>
                    </OutsideDots>
                    <OutsideDots>
                        <OutsideDot setChord={setChord} chord={chord} position={12}/>
                        <OutsideDot setChord={setChord} chord={chord} position={13}/>
                        <OutsideDot setChord={setChord} chord={chord} position={14}/>
                        <OutsideDot setChord={setChord} chord={chord} position={15}/>
                    </OutsideDots>
                </ContainerOutsideDots>
                <BotaoNovaBatida onClick={() => console.log(chord)}>NOVA LINHA</BotaoNovaBatida>
            </>
        );
}

export default CreateMusic;