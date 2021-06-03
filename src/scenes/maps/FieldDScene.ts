import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import { drawDiamondWell } from "~/game/mapElements";
import MapScene from "../MapScene";

export default class FieldAScene extends MapScene {
  mapOverflowColor = BackgroundColors.GreenMapOverflow;
  mapBackgroundColor = BackgroundColors.GreenMap;

  constructor() {
    super(SceneKeys.FieldD);
  }

  create() {
    this.drawMapBackground();
    this.drawMapItems();
  }

  drawMapItems() {
    drawDiamondWell(this, 168, 172);
  }
}
