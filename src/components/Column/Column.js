import {Line, ContainerColumn} from "./Styles"
import Dots  from "../Dots/Dots";


function Column() {
    return(
        <ContainerColumn>
            <Line> 
                <Dots />
            </Line>
            <Line>
                <Dots />
            </Line>
            <Line>
                <Dots />
            </Line>
            <Line>
                <Dots />
            </Line>
            <Line>
                <Dots />
            </Line>
            <Line>
                <Dots />
            </Line>
        </ContainerColumn>

    );
}

export default Column;