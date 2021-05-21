import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";

export default class WinScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Win);
  }
}
