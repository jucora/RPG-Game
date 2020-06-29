/** **************** ABOUT THIS CLASS *******************

This scene contains the functionality to create a new
explosion when the player gets hurt or when an enemy
is killed.

/****************************************************** */

// eslint-disable-next-line
class Explosion extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'explosion');
    scene.add.existing(this);
    this.play('explode');
  }
}

export default Explosion;
