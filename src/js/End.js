/** **************** ABOUT THIS CLASS *******************

This scene displays the end of the game and the final
score made by the player.

/****************************************************** */
/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';
import create from './create';

class End extends Phaser.Scene {
  constructor() {
    super('end');
  }

  backButtonAction() {
    this.backButton.on('pointerdown', () => {
      this.game.sound.stopAll();
      this.scene.start('menu');
    });
  }

  create() {
    this.background = create.background(this, 'menu');
    this.congratsText = create.text(
      this,
      this.game.config.width / 2,
      220,
      'Well done... You killed the Covid 19',
      24,
    );
    this.congratsText = create.text(
      this,
      this.game.config.width / 2,
      260,
      `Final Score: ${this.game.score}`,
      24,
    );
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

export default End;
