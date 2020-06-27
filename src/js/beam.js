class Beam extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    var x = scene.player.x + 7; // pendiente de avergiguar
    var y = scene.player.y;

    super(scene, x, y, "beam");

    scene.add.existing(this);
    this.play("beam_anim");
    scene.physics.world.enableBody(this); // enable spritesheet to have physics
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
