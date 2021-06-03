import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import { drawDiamondWell } from "~/game/mapElements";
import MapScene from "../MapScene";

export default class FieldAScene extends MapScene {
  mapOverflowColor = BackgroundColors.WashingtonGray;
  mapBackgroundColor = BackgroundColors.Blue;

  constructor() {
    super(SceneKeys.Washington);
  }

  create() {
    this.drawMapBackground();
    this.drawMapItems();
  }
}
