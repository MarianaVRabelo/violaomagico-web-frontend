//import { useState } from "react";
import {
	Body,
	GuitarNeck,
	GuitarStrings,
	String,
	GuitarFrets,
	BotaoNovoCompasso,
	OutsideDots,
	OutsideDot,
	ContainerOutsideDots,
} from "./Styles";
import WeirdButton from "../WeirdButton/WeirdButton";
import Compasso from "../Compasso/Compasso";

function CreateMusicComponent() {
	//const [chord, setChord] = useState([]);

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
					<Compasso />
					<Compasso />
					<Compasso />
					<Compasso />
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
			
		</Body>
	);
}

export default CreateMusicComponent;
