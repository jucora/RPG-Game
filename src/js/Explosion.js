/** **************** ABOUT THIS CLASS *******************

This scene contains the functionality to create a new
explosion when the player gets hurt or when an enemy
is killed.

/****************************************************** */
/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';

class Explosion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'explosion');
    scene.add.existing(this);
  }
}

export default Explosion;
