import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("title");
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
        this.scene.start("Map");
      },
      this
    );
  }
}
