import React, { useRef, useState } from "react";
import { Container, Title, Select, Button } from "./Styles";
import CreateMusic from "../../components/StepComponent/StepComponent";

function PageTest() {
	const [step, setStep] = useState(null);
	const selectRef = useRef();

	const handleConfirm = () => {
		const selectValue = selectRef.current.value;
		setStep(+selectValue);
	};
	console.log(step);
	return !step ? (
		<Container>
			<Title>Selecione a quantidade de passos da sua música</Title>
			<Select ref={selectRef}>
				<option value="3">3 Passos</option>
				<option value="4">4 Passos</option>
			</Select>
			<Button type="button" onClick={handleConfirm}>
				Confirmar
			</Button>
		</Container>
	) : (
		<CreateMusic step={step} />
	);
}

export default PageTest;
