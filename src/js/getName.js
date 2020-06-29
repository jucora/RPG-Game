/****************** ABOUT THIS CLASS *******************
 
This scene is where the player set his name. This class
validates that the name field is not empty in order to
start the game.

/*******************************************************/

import create from "./create";

// eslint-disable-next-line
class GetName extends Phaser.Scene {
  constructor() {
    super("getName");
  }

  inputNameField() {
    const div = document.createElement("div");
    div.setAttribute("id", "playerNameBox");
    const input = document.createElement("input");
    input.setAttribute("id", "playerName");
    div.appendChild(input);
    document.body.appendChild(div);
  }

  start(input) {
    this.game.playerName = input.value;
    this.game.score = 0;
    this.game.completed = 0;
    input.parentNode.removeChild(input);
    this.game.sound.stopAll();
    this.scene.start("room");
  }

  nameValidation() {
    const input = document.querySelector("#playerName");
    if (!input.value.trim().length) {
      input.style.background = "red";
    } else {
      this.start(input);
    }
  }

  backButtonAction() {
    backtButton.on("pointerdown", () => {
      this.game.sound.stopAll();
      document
        .querySelector("#playerNameBox")
        .parentNode.removeChild(document.querySelector("#playerNameBox"));
      this.scene.start("menu");
    });
  }

  text() {
    this.titleName = this.add.text(400, 150, "Your Name", {
      fontSize: 24,
    });
    this.titleName.setOrigin(0.5);
  }

  backButtonAction() {
    this.backbutton.on("pointerdown", () => {
      this.game.sound.stopAll();
      this.scene.start("menu");
      let inputName = document.querySelector("#playerNameBox");
      inputName.parentNode.removeChild(inputName);
    });
  }

  playButtonAction() {
    this.playButton.on("pointerdown", () => {
      this.nameValidation();
    });
  }

  create() {
    this.background = create.background(this, "menu");
    this.text();
    this.inputNameField();
    this.playButton = create.button(
      this,
      this.game.config.width / 2,
      250,
      "PLAY",
      24
    );
    this.playButtonAction();
    this.backbutton = create.button(
      this,
      this.game.config.width / 2,
      430,
      "BACK",
      24
    );
    this.backButtonAction();
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default GetName;
