class GetName extends Phaser.Scene {
  constructor() {
    super("getName");
  }

  inputNameField() {
    let div = document.createElement("div");
    div.setAttribute("id", "playerNameBox");
    let input = document.createElement("input");
    input.setAttribute("id", "playerName");
    div.appendChild(input);
    document.body.appendChild(div);
  }

  nameValidation() {
    let input = document.querySelector("#playerName");
    if (!input.value.trim().length) {
      input.style.background = "red";
    } else {
      this.game.playerName = input.value;
      this.game.score = 0;
      this.game.completed = 0;
      input.parentNode.removeChild(input);
      this.game.sound.stopAll();
      this.scene.start("room");
    }
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      this.game.config.width,
      this.game.config.height,
      "menu"
    );
    this.background.setOrigin(0, 0);

    this.titleName = this.add.text(400, 150, "Your Name", {
      fontSize: 24,
    });
    this.titleName.setOrigin(0.5);

    const playButton = this.add.text(this.game.config.width / 2, 250, "PLAY", {
      fontSize: 24,
    });
    playButton.setOrigin(0.5, 0);
    playButton.setInteractive();

    playButton.on("pointerdown", () => {
      this.nameValidation();
    });

    this.inputNameField();

    const backtButton = this.add.text(this.game.config.width / 2, 430, "BACK", {
      fontSize: 24,
    });
    backtButton.setOrigin(0.5, 0);
    backtButton.setInteractive();

    backtButton.on("pointerdown", () => {
      this.game.sound.stopAll();
      document
        .querySelector("#playerNameBox")
        .parentNode.removeChild(document.querySelector("#playerNameBox"));
      this.scene.start("menu");
    });
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default GetName;
