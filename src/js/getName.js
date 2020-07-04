/** **************** ABOUT THIS CLASS *******************

This scene is where the player set his name. This class
validates that the name field is not empty in order to
start the game.

/****************************************************** */

import name from './getNameHelper';
import create from './create';

// eslint-disable-next-line
class GetName extends Phaser.Scene {
  constructor() {
    super('getName');
  }

  start(input) {
    this.game.playerName = input.value;
    this.game.score = 0;
    this.game.completed = 0;
    input.parentNode.removeChild(input);
    this.game.sound.stopAll();
    this.scene.start('room');
  }

  text() {
    this.titleName = this.add.text(400, 150, 'Your Name', {
      fontSize: 24,
    });
    this.titleName.setOrigin(0.5);
  }

  backButtonAction() {
    this.backbutton.on('pointerdown', () => {
      this.game.sound.stopAll();
      const inputName = name.nameInputContainer();
      inputName.parentNode.removeChild(inputName);
      this.scene.start('menu');
    });
  }

  playButtonAction() {
    this.playButton.on('pointerdown', () => {
      if (name.validation()) {
        this.start(name.inputNameValue());
      }
    });
  }

  create() {
    this.background = create.background(this, 'menu');
    this.text();
    name.inputNameField();
    this.playButton = create.button(
      this,
      this.game.config.width / 2,
      250,
      'PLAY',
      24,
    );
    this.playButtonAction();
    this.backbutton = create.button(
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

export default GetName;
