/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';
import Menu from './js/Menu';
import Instructions from './js/Instructions';
import setGame from './js/setGame';
import getName from './js/getName';
import Room from './js/Room';
import Space from './js/Space';
import Scores from './js/Scores';
import End from './js/End';
import Credits from './js/Credits';

import './css/style.css';

const config = {
  width: 800,
  height: 480,
  backgroundColor: 0x000000,
  scene: [
    setGame,
    Menu,
    getName,
    Instructions,
    Scores,
    Credits,
    Room,
    Space,
    End,
  ],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

export default game;
