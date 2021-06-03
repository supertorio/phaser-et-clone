import Phaser from "phaser";
import MovementDirection from "~/consts/MovementDirection";
import SceneKeys from "~/consts/sceneKeys";
import { sceneEvents, SceneEventKeys } from "../events/SceneEvents";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Title);
  }

  create() {
    this.add.text(80, 360, "Game Title: " + this.game.config.gameTitle, {
      font: "16px Courier",
      color: "#fff",
    });

    // Clicking on this screen takes starts the game
    this.input.on(
      "pointerdown",
      () => {
        sceneEvents.emit(
          SceneEventKeys.MoveMap,
          SceneKeys.Forest,
          { x: 10, y: 25 },
          MovementDirection.DOWN
        );
      },
      this
    );

    const area = new Phaser.Geom.Rectangle(64, 64, 672, 472);
  }
}
