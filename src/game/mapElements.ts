import { BackgroundColors } from "~/consts/Colors";

const TITLE_BAR_RATIO = 0.1;
const SCORE_BAR_RATIO = 0.13;
const MAP_BAR_RATIO = 0.75;
const MAP_BAR_OFFSET_RATIO = 0.11;

const actionBarShape = (screenWidth, screenHeight) => {
  return new Phaser.Geom.Rectangle(0, 18, screenWidth, 44);
};

const scoreBarShape = (screenWidth, screenHeight) => {
  return new Phaser.Geom.Rectangle(0, 505, screenWidth, 61);
};

const mapOverflowShape = (screenWidth, screenHeight) => {
  return new Phaser.Geom.Rectangle(0, 74, screenWidth, 418);
};

const mapGameplayBoundsShape = (screenWidth, screenHeight) => {};

export const drawActionBar = (scene, width, height) => {
  var actionBar = actionBarShape(width, height);
  var actionBarGraphics = scene.add.graphics({
    fillStyle: { color: BackgroundColors.ActionBar },
  });
  actionBarGraphics.fillRectShape(actionBar);
};

export const drawMapBar = (scene, width, height, fillColor) => {
  var mapBar = mapOverflowShape(width, height);
  var mapBarGraphics = scene.add.graphics({
    fillStyle: { color: fillColor },
  });
  mapBarGraphics.fillRectShape(mapBar);
};

export const drawScoreBar = (scene, width, height) => {
  var scoreBar = scoreBarShape(width, height);

  var scoreBarGraphics = scene.add.graphics({
    fillStyle: { color: BackgroundColors.ScoreBar },
  });

  scoreBarGraphics.fillRectShape(scoreBar);
};
