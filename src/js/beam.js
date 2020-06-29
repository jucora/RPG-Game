/****************** ABOUT THIS CLASS *******************
 
This scene contains the functionality to create a new 
shot when the user press the spacebar

/*******************************************************/

// eslint-disable-next-line
class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    const x = scene.player.x + 7;
    const { y } = scene.player;

    super(scene, x, y, "beam");

    scene.add.existing(this);
    this.play("beam_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = -250;
    scene.projectiles.add(this);
  }

  update() {
    if (this.y < 32) {
      this.destroy();
    }
  }
}

export default Beam;
