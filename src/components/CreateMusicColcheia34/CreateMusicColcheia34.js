import {
  BodyMusic,
  GuitarNeck,
  GuitarStrings,
  String,
  GuitarCompass,
  OutsideDots,
  ContainerOutsideDots,
} from "./Styles";
import WeirdButton from "../WeirdButton/WeirdButton";
import Colcheia34 from "../Compass/Colcheia34";

function CreateMusicColcheia34() {
  return (
    <BodyMusic>
      <GuitarNeck>
        <GuitarStrings>
          <String>E</String>
          <String>A</String>
          <String>D</String>
          <String>G</String>
          <String>B</String>
          <String>e</String>
        </GuitarStrings>
        <GuitarCompass>
          <Colcheia34 />
          <Colcheia34 />
          <Colcheia34 />
          <Colcheia34 />
        </GuitarCompass>
      </GuitarNeck>
      <ContainerOutsideDots>
        <OutsideDots>
          <WeirdButton />
          <WeirdButton />
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
          <WeirdButton />
          <WeirdButton />
        </OutsideDots>
        <OutsideDots>
          <WeirdButton />
          <WeirdButton />
          <WeirdButton />
          <WeirdButton />
          <WeirdButton />
          <WeirdButton />
        </OutsideDots>

      </ContainerOutsideDots>
    </BodyMusic>
  );
}

export default CreateMusicColcheia34;
