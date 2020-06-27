class End extends Phaser.Scene {
  constructor() {
    super("end");
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
    this.congratsText = this.add.text(
      this.game.config.width / 2,
      220,
      "Well done... you are a new hero!",
      { fontSize: 24 }
    );
    this.congratsText.setOrigin(0.5, 0);

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

export default End;
