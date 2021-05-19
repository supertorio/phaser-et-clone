import Phaser from "phaser";

import TitleScene from "./scenes/TitleScene";
import MapScene from "./scenes/MapScene";
import PitScene from "./scenes/PitScene";
import WinScene from "./scenes/WinScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [TitleScene, MapScene, PitScene, WinScene],
};

export default new Phaser.Game(config);
