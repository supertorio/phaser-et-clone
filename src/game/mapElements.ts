import { BackgroundColors } from "~/consts/Colors";

const TITLE_BAR_RATIO = 0.1;
const SCORE_BAR_RATIO = 0.13;
const MAP_BAR_RATIO = 0.75;
const MAP_BAR_OFFSET_RATIO = 0.11;

const actionBarShape = (
  screenWidth: number,
  screenHeight: number
): Phaser.Geom.Rectangle => {
  return new Phaser.Geom.Rectangle(0, 18, screenWidth, 44);
};

const scoreBarShape = (
  screenWidth: number,
  screenHeight: number
): Phaser.Geom.Rectangle => {
  return new Phaser.Geom.Rectangle(0, 505, screenWidth, 61);
};

const mapOverflowShape = (
  screenWidth: number,
  screenHeight: number
): Phaser.Geom.Rectangle => {
  return new Phaser.Geom.Rectangle(0, 74, screenWidth, 418);
};

const mapGameplayBoundsShape = (
  screenWidth: number,
  screenHeight: number
): Phaser.Geom.Rectangle => {
  return new Phaser.Geom.Rectangle(70, 85, 780, 400);
};

const diamondWellShape = () => {
  return new Phaser.Geom.Polygon([
    0, 78, 24, 78, 24, 32, 49, 32, 49, 0, 73, 0, 73, 32, 98, 32, 98, 78, 121,
    78, 121, 153, 98, 153, 98, 202, 73, 202, 73, 233, 49, 233, 49, 202, 24, 202,
    24, 153, 0, 153,
  ]);
};

export const drawActionBar = (
  scene: Phaser.Scene,
  screenWidth: number,
  screenHeight: number
): void => {
  var actionBar = actionBarShape(screenWidth, screenHeight);
  var actionBarGraphics = scene.add.graphics({
    fillStyle: { color: BackgroundColors.ActionBar },
  });
  actionBarGraphics.fillRectShape(actionBar);
};

export const drawMapBar = (
  scene: Phaser.Scene,
  screenWidth: number,
  screenHeight: number,
  fillColor: BackgroundColors | number
): void => {
  var mapBar = mapOverflowShape(screenWidth, screenHeight);
  var mapBarGraphics = scene.add.graphics({
    fillStyle: { color: fillColor },
  });
  mapBarGraphics.fillRectShape(mapBar);
};

export const drawScoreBar = (
  scene: Phaser.Scene,
  screenWidth: number,
  screenHeight: number
): void => {
  var scoreBar = scoreBarShape(screenWidth, screenHeight);

  var scoreBarGraphics = scene.add.graphics({
    fillStyle: { color: BackgroundColors.ScoreBar },
  });

  scoreBarGraphics.fillRectShape(scoreBar);
};

export const drawMapArea = (
  scene: Phaser.Scene,
  screenWidth: number,
  screenHeight: number,
  fillColor: BackgroundColors | number
): void => {
  var mapArea = mapGameplayBoundsShape(screenWidth, screenHeight);
  var mapAreaGraphics = scene.add.graphics({
    fillStyle: { color: fillColor },
  });
  mapAreaGraphics.fillRectShape(mapArea);
};

export const drawDiamondWell = (
  scene: Phaser.Scene,
  positionX: number,
  positionY: number
): void => {
  var diamondWell = diamondWellShape();
  var diamondWellGraphics = scene.add.graphics({
    x: positionX,
    y: positionY,
    fillStyle: { color: BackgroundColors.GreenMapOverflow },
  });
  diamondWellGraphics.fillPoints(diamondWell.points, true);
};
