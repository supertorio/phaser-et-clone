import Phaser from "phaser";

const sceneEvents = new Phaser.Events.EventEmitter();

enum SceneEventKeys {
  MoveMap = "move-maps",
  CollectCandy = "collect-candy",
  CollectPhonePart = "collect-phone-part",
}

export { sceneEvents, SceneEventKeys };
