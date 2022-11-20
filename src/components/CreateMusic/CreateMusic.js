import React, { useMemo, useState } from "react";
import {
	GuitarNeck,
	GuitarStrings,
	String,
	GuitarFrets,
	Fret,
	BotaoNovaBatida,
	Line,
	OutsideDots,
	ContainerOutsideDots,
} from "./Styles";
import OutsideDot from "../OutsideDot/OutsideDot";
import Dots from "../Dots/Dots";
import { defaultChord } from "../../utils/ChordUtils";

const stepDefaultValue = 4;
const fretDefaultValue = 4;
const notes = ["e", "B", "G", "D", "A", "E"];

function CreateMusic({ step = stepDefaultValue }) {
	const [chord, setChord] = useState(defaultChord);
	const fretArray = useMemo(() => [...Array(fretDefaultValue).keys()], []);
	const stepArray = useMemo(() => [...Array(step).keys()], [step]);

	// const [ rerender, setRerender ] = useState(true);

	// useEffect(() => {
	//     setRerender(!rerender);
	// },[rerender]);

	return (
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
					{fretArray.map((fretPosition) => (
						<Fret key={fretPosition}>
							{notes.map((note) => (
								<Line key={note}>
									{stepArray.map((dotPosition) => (
										<Dots
											setChord={setChord}
											chord={chord}
											key={dotPosition}
											position={fretPosition * fretArray.length + dotPosition}
											note={note}
										/>
									))}
								</Line>
							))}
						</Fret>
					))}
				</GuitarFrets>
			</GuitarNeck>
			<ContainerOutsideDots>
				{fretArray.map((fretPostion) => (
					<OutsideDots key={fretPostion}>
						{stepArray.map((outsideDotPostion) => (
							<OutsideDot
								setChord={setChord}
								chord={chord}
								key={outsideDotPostion}
								position={fretPostion * fretArray.length + outsideDotPostion}
							/>
						))}
					</OutsideDots>
				))}
			</ContainerOutsideDots>
			<BotaoNovaBatida onClick={() => console.log(chord)}>
				NOVA LINHA
			</BotaoNovaBatida>
		</>
	);
}

export default CreateMusic;
