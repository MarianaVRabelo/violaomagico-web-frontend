import { useState } from "react";
import {
	Body,
	GuitarNeck,
	GuitarStrings,
	String,
	GuitarFrets,
	Fret,
	Dots,
	BotaoNovaBatida,
	Line,
	OutsideDots,
	OutsideDot,
	ContainerOutsideDots,
} from "./Styles";
import WeirdButton from "../WeirdButton/WeirdButton";

function CreateMusicComponent() {
	const [chord, setChord] = useState([]);

	return (
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
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
					</Fret>
					<Fret>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
					</Fret>
					<Fret>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
					</Fret>
					<Fret>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
						<Line>
							<Dots />
							<Dots />
							<Dots />
							<Dots />
						</Line>
					</Fret>
				</GuitarFrets>
			</GuitarNeck>
			<ContainerOutsideDots>
				<OutsideDots>
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
				</OutsideDots>
				<OutsideDots>
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
				</OutsideDots>
				<OutsideDots>
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
				</OutsideDots>
				<OutsideDots>
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
					<WeirdButton />
				</OutsideDots>
			</ContainerOutsideDots>
			<BotaoNovaBatida>NOVA BATIDA</BotaoNovaBatida>
		</Body>
	);
}

export default CreateMusicComponent;
