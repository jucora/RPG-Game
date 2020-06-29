import create from './create';

class Menu extends Phaser.Scene {
  constructor() {
    super('menu');
  }

  startButtonAction() {
    this.startButton.on('pointerdown', () => {
      this.scene.start('getName');
    });
  }

  instructionsButtonAction() {
    this.instructionsButton.on('pointerdown', () => {
      this.scene.start('instructions');
    });
  }

  scoreButtonAction() {
    this.scoresButton.on('pointerdown', () => {
      this.scene.start('scores');
    });
  }

  creditsButtonAction() {
    this.creditsButton.on('pointerdown', () => {
      this.scene.start('credits');
    });
  }

  create() {
    this.background = create.background(this, 'menu');
    create.musicConfiguration(this, 'music_menu');
    this.text = create.text(
      this,
      this.game.config.width / 2,
      100,
      'KILLING COVID 19',
      34,
    );

    this.startButton = create.button(
      this,
      this.game.config.width / 2,
      200,
      'START',
      24,
    );
    this.startButtonAction();

    this.instructionsButton = create.button(
      this,
      this.game.config.width / 2,
      250,
      'HOW TO PLAY',
      24,
    );
    this.instructionsButtonAction();

    this.scoresButton = create.button(
      this,
      this.game.config.width / 2,
      300,
      'SCORES',
      24,
    );
    this.scoreButtonAction();

    this.creditsButton = create.button(
      this,
      this.game.config.width / 2,
      350,
      'CREDITS',
      24,
    );
    this.creditsButtonAction();
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default Menu;
