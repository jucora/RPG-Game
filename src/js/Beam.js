/** **************** ABOUT THIS CLASS *******************

This scene contains the functionality to create a new
shot when the user press the spacebar

/****************************************************** */
/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';

class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    const x = scene.player.x + 7;
    const { y } = scene.player;

    super(scene, x, y, 'beam');

    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    scene.projectiles.add(this);
  }

  update() {
    if (this.y < 32) {
      this.destroy();
    }
  }
}

export default Beam;
