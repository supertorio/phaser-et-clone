import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import { drawActionBar, drawMapBar, drawScoreBar } from "~/game/mapElements";

export default class FieldDScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.FieldD);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    drawActionBar(this, width, height);
    drawMapBar(this, width, height, BackgroundColors.GreenMapOverflow);
    drawScoreBar(this, width, height);
  }
}
