/** **************** ABOUT THIS CLASS *******************

This scene is where the player can see the instructions
to play the game.

/****************************************************** */
/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';
import create from './create';

class Instructions extends Phaser.Scene {
  constructor() {
    super('instructions');
  }

  backButtonAction() {
    this.backButton.on('pointerdown', () => {
      this.game.sound.stopAll();
      this.scene.start('menu');
    });
  }

  create() {
    this.background = create.background(this, 'menu');

    this.instructionsTitle = create.text(
      this,
      this.game.config.width / 2,
      50,
      'How to play',
      34,
    );

    create.text(
      this,
      this.game.config.width / 2,
      110,
      '1) Drive the ship with your keyboard arrows',
      18,
    );

    create.text(
      this,
      this.game.config.width / 2,
      140,
      '2) Use the spacebar to shot and kill the viruses',
      18,
    );

    create.text(
      this,
      this.game.config.width / 2,
      170,
      '3) Collect all spheres around you in order to finish the level',
      18,
    );

    create.text(
      this,
      this.game.config.width / 2,
      200,
      '4) Every time you pass a level, a new portal is opened',
      18,
    );

    create.text(
      this,
      this.game.config.width / 2,
      230,
      '5) Kill as much viruses as you can in order to get a higher score',
      18,
    );

    create.text(this, this.game.config.width / 2, 260, '6) Enjoy!', 18);

    this.backButton = create.button(
      this,
      this.game.config.width / 2,
      430,
      'BACK',
      24,
    );
    this.backButtonAction();
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default Instructions;
