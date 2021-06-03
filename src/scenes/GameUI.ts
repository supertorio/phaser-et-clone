import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";
import { drawActionBar, drawScoreBar } from "~/game/mapElements";

export default class FieldAScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.GameUI);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    drawActionBar(this, width, height);
    drawScoreBar(this, width, height);
  }
}
