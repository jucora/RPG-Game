/****************** ABOUT THIS CLASS *******************
 
This scene is where the player can see the credits of 
the game, including the software developer, pixelart
music and audio effects.

/*******************************************************/

import create from "./create";

class Credits extends Phaser.Scene {
  constructor() {
    super("credits");
  }

  backButtonAction() {
    this.backButton.on("pointerdown", () => {
      this.game.sound.stopAll();
      this.scene.start("menu");
    });
  }
  create() {
    this.background = create.background(this, "menu");
    this.text = create.text(
      this,
      this.game.config.width / 2,
      50,
      "Principal Author",
      34
    );

    create.text(
      this,
      this.game.config.width / 2,
      110,
      "Julian Belmonte: Software Developer",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      150,
      "Pixel Art, Music and Sounds",
      28
    );

    create.text(
      this,
      this.game.config.width / 2,
      180,
      "www.amon.co: Various Coloured Orbs/Spheres! ",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      200,
      "Luis Zuno: spaceship, beam, power-up, explosion",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      220,
      "TeeKay:Simple 2D virus sprites",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      240,
      "pixelcitybros: Human Sprite",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      260,
      "Backgrounds: Rawdanitsu, ",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      280,
      "Alexandr Zhelanov: DEmo_3, SkyPortal",
      16
    );
    create.text(
      this,
      this.game.config.width / 2,
      300,
      "Ogrebane: Ghost sound ",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      320,
      "cynicmusic:  Heavy_ConceptB ",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      340,
      "yd: ObservingTheStar",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      360,
      "Juhani Junkala: Retro Game Music",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      380,
      "Bogart VGM: Scifi Action",
      16
    );

    create.text(
      this,
      this.game.config.width / 2,
      400,
      "Matthew Pablo: n-Dimensions",
      16
    );

    this.backButton = create.button(
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

export default Credits;
