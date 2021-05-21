import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import { drawActionBar, drawMapBar, drawScoreBar } from "~/game/mapElements";

export default class ForestScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Forest);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    drawActionBar(this, width, height);
    drawMapBar(this, width, height, BackgroundColors.GreenOverflow);
    drawScoreBar(this, width, height);
  }
}
