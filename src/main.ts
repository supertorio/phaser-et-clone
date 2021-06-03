import Phaser from "phaser";

import TitleScene from "./scenes/TitleScene";
import Game from "./scenes/Game";
import ForestScene from "./scenes/maps/ForestScene";
import FieldAScene from "./scenes/maps/FieldAScene";
import FieldBScene from "./scenes/maps/FieldBScene";
import FieldCScene from "./scenes/maps/FieldCScene";
import FieldDScene from "./scenes/maps/FieldDScene";
import WashingtonScene from "./scenes/maps/WashingtonScene";
import PitScene from "./scenes/PitScene";
import WinScene from "./scenes/WinScene";
import GameUI from "./scenes/GameUI";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 920,
  height: 613,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [
    Game,
    TitleScene,
    GameUI,
    ForestScene,
    FieldAScene,
    FieldBScene,
    FieldCScene,
    FieldDScene,
    PitScene,
    WashingtonScene,
    WinScene,
  ],
  title: "ET Phone Home",
};

export default new Phaser.Game(config);
