import Phaser from "phaser";
import SceneKeys from "~/consts/sceneKeys";

export default class PitScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Pit);
  }
}
