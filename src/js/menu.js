class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
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

    this.music = this.sound.add("music_menu");
    this.musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.music.play(this.musicConfig);

    this.gameTitle = this.add.text(
      this.game.config.width / 2,
      100,
      "KILLING COVID 19",
      { fontSize: 34 }
    );
    this.gameTitle.setOrigin(0.5, 0);

    const startButton = this.add.text(
      this.game.config.width / 2,
      200,
      "START",
      { fontSize: 24 }
    );
    startButton.setOrigin(0.5, 0);
    startButton.setInteractive();

    startButton.on("pointerdown", () => {
      this.scene.start("getName");
    });

    const instructionsButton = this.add.text(
      this.game.config.width / 2,
      250,
      "HOW TO PLAY",
      { fontSize: 24 }
    );
    instructionsButton.setOrigin(0.5, 0);
    instructionsButton.setInteractive();

    instructionsButton.on("pointerdown", () => {
      this.scene.start("instructions");
    });

    const scoresButton = this.add.text(
      this.game.config.width / 2,
      300,
      "SCORES",
      { fontSize: 24 }
    );
    scoresButton.setOrigin(0.5, 0);
    scoresButton.setInteractive();

    scoresButton.on("pointerdown", () => {
      this.scene.start("scores");
    });

    const creditsButton = this.add.text(
      this.game.config.width / 2,
      350,
      "CREDITS",
      { fontSize: 24 }
    );
    creditsButton.setOrigin(0.5, 0);
    creditsButton.setInteractive();

    creditsButton.on("pointerdown", () => {});
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default Menu;
