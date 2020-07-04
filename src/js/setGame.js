/** **************** ABOUT THIS CLASS *******************

This is the principal scene of the game, it loads all
the sprites, images and audio before the game starts

/****************************************************** */
/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';

class setGame extends Phaser.Scene {
  constructor() {
    super('setGame');
  }

  loadImages() {
    this.load.image('menu', '../src/assets/images/menu.png');
    this.load.image('background1', '../src/assets/images/background1.jpg');
    this.load.image('background2', '../src/assets/images/background2.jpg');
    this.load.image('background3', '../src/assets/images/background3.jpg');
    this.load.image('background4', '../src/assets/images/background4.png');
    this.load.image('background5', '../src/assets/images/background5.png');
  }

  loadSprites() {
    this.load.spritesheet('ball', '../src/assets/spritesheets/balls.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet('human', '../src/assets/spritesheets/human.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet(
      'green_virus',
      '../src/assets/spritesheets/Green_Virus.png',
      {
        frameWidth: 50,
        frameHeight: 50,
      },
    );
    this.load.spritesheet(
      'blue_virus',
      '../src/assets/spritesheets/Blue_Virus.png',
      {
        frameWidth: 50,
        frameHeight: 50,
      },
    );
    this.load.spritesheet(
      'red_virus',
      '../src/assets/spritesheets/Red_Virus.png',
      {
        frameWidth: 50,
        frameHeight: 50,
      },
    );
    this.load.spritesheet(
      'pink_virus',
      '../src/assets/spritesheets/Pink_Virus.png',
      {
        frameWidth: 50,
        frameHeight: 50,
      },
    );
    this.load.spritesheet(
      'explosion',
      '../src/assets/spritesheets/explosion.png',
      {
        frameWidth: 16,
        frameHeight: 16,
      },
    );

    this.load.spritesheet(
      'power-up',
      '../src/assets/spritesheets/power-up.png',
      {
        frameWidth: 16,
        frameHeight: 16,
      },
    );

    this.load.spritesheet('ship', '../src/assets/spritesheets/ship.png', {
      frameWidth: 16,
      frameHeight: 24,
    });

    this.load.spritesheet('beam', '../src/assets/spritesheets/beam.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  loadAudio() {
    this.load.audio('music_menu', '../src/assets/sounds/SkyPortal.mp3');
    this.load.audio(
      'music_scene1',
      '../src/assets/sounds/ObservingTheStar.ogg',
    );
    this.load.audio('backRoom', '../src/assets/sounds/ghost.wav');
    this.load.audio('music_scene2', '../src/assets/sounds/dimensions.mp3');
    this.load.audio('music_scene3', '../src/assets/sounds/action3.ogg');
    this.load.audio('music_scene4', '../src/assets/sounds/retro.wav');
    this.load.audio('music_scene5', '../src/assets/sounds/ScifiAction.mp3');
    this.load.audio('victory', '../src/assets/sounds/Heavy_ConceptB.wav');
    this.load.audio(
      'audio_beam',
      '../src/assets/sounds/beam.ogg',
      '../src/assets/sounds/beam.mp3',
    );
    this.load.audio(
      'audio_explosion',
      '../src/assets/sounds/explosion.ogg',
      '../src/assets/sounds/explosion.mp3',
    );
    this.load.audio(
      'audio_pickup',
      '../src/assets/sounds/pickup.ogg',
      '../src/assets/sounds/pickup.mp3',
    );
  }

  loadBitmap() {
    this.load.bitmapFont(
      'pixelFont',
      '../src/assets/font/font.png',
      '../src/assets/font/font.xml',
    );
  }

  preload() {
    this.loadImages();
    this.loadSprites();
    this.loadAudio();
    this.loadBitmap();
  }

  create() {
    this.scene.start('menu');
  }
}

export default setGame;
