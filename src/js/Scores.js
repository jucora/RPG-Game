/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';
import create from './create';
import score from './scoresHelper';

class Scores extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  backButtonAction() {
    this.backButton.on('pointerdown', () => {
      const table = document.querySelector('#tableContainer');
      if (table) {
        table.parentNode.removeChild(table);
      }
      this.game.sound.stopAll();
      this.scene.start('menu');
    });
  }

  create() {
    score.getLeaderBoard();
    this.background = create.background(this, 'menu');
    create.text(this, this.game.config.width / 2, 50, 'Leader Board', 34);
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

export default Scores;
