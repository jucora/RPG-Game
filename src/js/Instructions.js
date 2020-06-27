class Instructions extends Phaser.Scene {
  constructor() {
    super("instructions");
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

    this.instructionsTitle = this.add.text(
      this.game.config.width / 2,
      50,
      "How to play",
      { fontSize: 34 }
    );
    this.instructionsTitle.setOrigin(0.5, 0);

    this.instruction1 = this.add.text(
      this.game.config.width / 2,
      110,
      "1) Drive the ship with your keyboard arrows",
      { fontSize: 18 }
    );
    this.instruction1.setOrigin(0.5, 0);

    this.instruction2 = this.add.text(
      this.game.config.width / 2,
      140,
      "2) Use the spacebar to shot and kill the viruses",
      { fontSize: 18 }
    );
    this.instruction2.setOrigin(0.5, 0);

    this.instruction3 = this.add.text(
      this.game.config.width / 2,
      170,
      "3) Collect all spheres around you in order to finish the level",
      { fontSize: 18 }
    );
    this.instruction3.setOrigin(0.5, 0);

    this.instruction4 = this.add.text(
      this.game.config.width / 2,
      200,
      "4) Every time you pass a level, a new portal is opened",
      { fontSize: 18 }
    );
    this.instruction4.setOrigin(0.5, 0);

    this.instruction5 = this.add.text(
      this.game.config.width / 2,
      230,
      "5) Kill as much viruses as you can in order to get a higher score",
      { fontSize: 18 }
    );
    this.instruction5.setOrigin(0.5, 0);

    this.instruction6 = this.add.text(
      this.game.config.width / 2,
      260,
      "6) Enjoy!",
      { fontSize: 18 }
    );
    this.instruction6.setOrigin(0.5, 0);

    const backtButton = this.add.text(this.game.config.width / 2, 430, "BACK", {
      fontSize: 24,
    });
    backtButton.setOrigin(0.5, 0);
    backtButton.setInteractive();

    backtButton.on("pointerdown", () => {
      this.game.sound.stopAll();
      this.scene.start("menu");
    });
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default Instructions;
