import Phaser from 'phaser';
import create from './create';
import getLeaderBoard from './scoresHelper';

class Scores extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  text() {
    this.scoreTitle = this.add.text(
      this.game.config.width / 2,
      50,
      'Leader Board',
      { fontSize: 34 },
    );
    this.scoreTitle.setOrigin(0.5, 0);
  }

  backButtonAction() {
    this.backButton.on('pointerdown', () => {
      const table = document.querySelector('#tableContainer');
      table.parentNode.removeChild(table);
      this.game.sound.stopAll();
      this.scene.start('menu');
    });
  }

  create() {
    getLeaderBoard();
    this.background = create.background(this, 'menu');
    this.text();
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
