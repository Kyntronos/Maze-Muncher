// game.js
import PacmanScene from './src/scenes/PacmanScene.js';

const config = {
  type: Phaser.AUTO,
  width: 464,
  height: 560,
  parent: "container",
  backgroundColor: "#000000",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: PacmanScene,
};

const game = new Phaser.Game(config);
