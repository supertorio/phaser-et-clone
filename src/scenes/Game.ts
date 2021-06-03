import Phaser from "phaser";
import SceneKeys from "~/consts/SceneKeys";
import { sceneEvents, SceneEventKeys } from "../events/SceneEvents";
import { CharacterPosition } from "../types";
import MovementDirection from "~/consts/MovementDirection";
import GameState from "~/consts/GameState";

export default class Game extends Phaser.Scene {
  private currentMapScene!: SceneKeys;

  constructor() {
    super(SceneKeys.Game);
  }

  create() {
    this.currentMapScene = SceneKeys.Title;
    this.scene.run(this.currentMapScene);
    this.scene.run(SceneKeys.GameUI);

    sceneEvents.on(
      SceneEventKeys.MoveMap,
      (
        nextMapScene: SceneKeys,
        lastPosition?: CharacterPosition,
        transitionDirection?: MovementDirection
      ) => {
        // Store the last posistion so the new map can place the
        // character in the correct starting positon
        this.registry.set(GameState.LastPosition, lastPosition);
        this.registry.set(GameState.ExitDirection, transitionDirection);
        this.changeMapScene(nextMapScene);
      }
    );
  }

  changeMapScene(nextMapScene: SceneKeys) {
    this.scene.stop(this.currentMapScene);
    this.scene.start(nextMapScene);
    this.currentMapScene = nextMapScene;
  }
}
