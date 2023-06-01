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
import Compass from "../Compass/Compass";

function CreateMusicComponent() {
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
          <Compass />
          <Compass />
          <Compass />
          <Compass />
        </GuitarCompass>
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
    </BodyMusic>
  );
}

export default CreateMusicComponent;
