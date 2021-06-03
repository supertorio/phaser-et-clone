import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import { drawMapBar, drawMapArea } from "~/game/mapElements";
import GameState from "~/consts/GameState";

export default class MapScene extends Phaser.Scene {
  mapOverflowColor!: BackgroundColors;
  mapBackgroundColor!: BackgroundColors;

  constructor(mapKey: SceneKeys) {
    super(mapKey);
  }

  create() {
    this.drawMapBackground();
    this.drawMapItems();

    console.log(
      this.registry.get(GameState.LastPosition),
      this.registry.get(GameState.ExitDirection)
    );
  }

  drawMapBackground() {
    const width = this.scale.width;
    const height = this.scale.height;
    drawMapBar(this, width, height, this.mapOverflowColor);
    drawMapArea(this, width, height, this.mapBackgroundColor);
  }

  drawMapItems() {}
}
