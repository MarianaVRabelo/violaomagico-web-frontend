import {Line, ContainerColumn} from "./Styles"
import Dots  from "../Dots/Dots";


function Column() {
    return(
        <ContainerColumn>
            <Line> 
                <Dots id={E} />
            </Line>
            <Line>
                <Dots id={A} />
            </Line>
            <Line>
                <Dots id={D} />
            </Line>
            <Line>
                <Dots id={G} />
            </Line>
            <Line>
                <Dots id={B} />
            </Line>
            <Line>
                <Dots id={e} />
            </Line>
        </ContainerColumn>

    );
}

export default Column;