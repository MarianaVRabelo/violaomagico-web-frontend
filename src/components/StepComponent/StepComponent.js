import React, { useState } from "react";
import CreateMusic from "../CreateMusic/CreateMusic";
import { Container, BotaoNovaBatida } from "./Style";

function Test({ step }) {
	const [createMusic, setCreateMusic] = useState([
		<CreateMusic step={step} key={0} />,
	]);

	let handleAddComponent = (e) => {
		e.preventDefault();
		setCreateMusic([
			...createMusic,
			<CreateMusic step={step} key={createMusic.length} />,
		]);
	};

	return (
		<Container>
			{createMusic}
			<BotaoNovaBatida onClick={handleAddComponent}>NOVA LINHA</BotaoNovaBatida>
		</Container>
	);
}

export default Test;
