import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import {
  drawActionBar,
  drawMapBar,
  drawScoreBar,
  drawMapArea,
  drawDiamondWell,
} from "~/game/mapElements";

export default class FieldAScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.FieldA);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    drawActionBar(this, width, height);
    drawMapBar(this, width, height, BackgroundColors.GreenMapOverflow);
    drawScoreBar(this, width, height);
    drawMapArea(this, width, height, BackgroundColors.GreenMap);
    drawDiamondWell(this, 168, 172);
  }
}
