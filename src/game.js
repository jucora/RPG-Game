import Menu from "./js/menu";
import Instructions from "./js/Instructions";
import setGame from "./js/setGame";
import getName from "./js/getName";
import Room from "./js/Room";
import Space from "./js/Space";
import Scores from "./js/Scores";
import End from "./js/End";

import "./css/style.css";

var config = {
  width: 800,
  height: 480,
  backgroundColor: 0x000000,
  scene: [setGame, Menu, getName, Instructions, Room, Space, Scores, End],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};
let cursors;
let human;
let game = new Phaser.Game(config);