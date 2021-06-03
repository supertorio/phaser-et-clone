import SceneKeys from "~/consts/sceneKeys";
import { BackgroundColors } from "~/consts/Colors";
import GameState from "~/consts/GameState";
import MapScene from "../MapScene";

export default class ForestScene extends MapScene {
  mapOverflowColor = BackgroundColors.GreenMapOverflow;
  mapBackgroundColor = BackgroundColors.GreenMap;

  constructor() {
    super(SceneKeys.Forest);
  }

  create() {
    this.drawMapBackground();
    this.drawMapItems();

    console.log(
      this.registry.get(GameState.LastPosition),
      this.registry.get(GameState.ExitDirection)
    );
  }
}
