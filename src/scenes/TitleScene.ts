import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Title);
  }

  create() {
    this.add.text(80, 560, "Game Title: " + this.game.config.gameTitle, {
      font: "16px Courier",
      color: "#fff",
    });

    // Clicking on this screen takes starts the game
    this.input.on(
      "pointerdown",
      () => {
        this.scene.start(SceneKeys.Forest);
      },
      this
    );

    const area = new Phaser.Geom.Rectangle(64, 64, 672, 472);
  }
}
