/* istanbul ignore next */
import Beam from "./beam";
import Explosion from "./explosion";

class Space extends Phaser.Scene {
  constructor() {
    super({ key: "space" });
  }

  scoreGraphic() {
    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0, 0);
    graphics.lineTo(this.game.config.width, 0);
    graphics.lineTo(this.game.config.width, 20);
    graphics.lineTo(0, 20);
    graphics.lineTo(0, 0);
    graphics.closePath();
    graphics.fillPath();
  }

  async addScoreToApi() {
    var url =
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/";
    var data = { user: this.game.playerName, score: this.game.score };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }

  pickPowerUp(player, powerUp) {
    this.collect -= 1;
    if (this.collect < 0) {
      this.music.pause(this.musicConfig);
      this.game.completed += 1;
      if (this.game.completed === 4) {
        this.victory.play();
        this.addScoreToApi();
        this.scene.start("end");
      } else {
        this.ghost.play();
        this.scene.start("room");
      }
    }
    powerUp.disableBody(true, true);
    this.pickupSound.play();
  }

  resetPlayer() {
    var x = this.game.config.width / 2 - 8;
    var y = this.game.config.height + 64;
    this.player.enableBody(true, x, y, true, true);
    this.player.alpha = 0.5;
    var tween = this.tweens.add({
      targets: this.player,
      y: this.game.config.height - 64,
      ease: "Power1",
      duration: 1500,
      repeat: false,
      onComplete: function () {
        this.player.alpha = 1;
      },
      callbackScope: this,
    });
  }

  resetShipPos(virus) {
    virus.y = 0;
    var randomX = Phaser.Math.Between(0, this.game.config.width);
    virus.x = randomX;
  }

  hurtPlayer(player, enemy) {
    this.resetShipPos(enemy);
    if (this.player.alpha < 1) {
      return;
    }
    var explosion = new Explosion(this, player.x, player.y);
    player.disableBody(true, true);
    this.explosionSound.play();
    this.time.addEvent({
      delay: 1000,
      callback: this.resetPlayer,
      callbackScope: this,
      loop: false,
    });
    this.lifes -= 1;
    if (this.lifes === 0) {
      this.game.score = 0;
      this.music.pause(this.musicConfig);
      this.ghost.play();
      this.scene.start("room");
    }
  }

  zeroPad(number, size) {
    var stringNumber = String(number);
    while (stringNumber.length < (size || 2)) {
      stringNumber = "0" + stringNumber;
    }
    return stringNumber;
  }

  hitEnemy(projectile, enemy) {
    var explosion = new Explosion(this, enemy.x, enemy.y);
    projectile.destroy();
    this.resetShipPos(enemy);
    this.game.score += 15;
    this.scoreLabel.text = "SCORE " + this.zeroPad(this.game.score, 6);
    this.explosionSound.play();
  }

  amountEnemies() {
    if (this.game.completed === 0) {
      return 5;
    } else if (this.game.completed === 1) {
      return 2;
    } else if (this.game.completed === 2) {
      return 3;
    } else if (this.game.completed === 3) {
      return 4;
    }
  }

  enemiesSpriteControl() {
    if (this.game.completed === 0) {
      return this.physics.add.sprite(16, 16, "green_virus");
    } else if (this.game.completed === 1) {
      return this.physics.add.sprite(16, 16, "pink_virus");
    } else if (this.game.completed === 2) {
      return this.physics.add.sprite(16, 16, "red_virus");
    } else if (this.game.completed === 3) {
      return this.physics.add.sprite(16, 16, "pink_virus");
    }
  }

  enemiesScaleControl() {
    if (this.game.completed === 0) {
      return 1;
    } else if (this.game.completed === 1) {
      return 2;
    } else if (this.game.completed === 2) {
      return 2;
    } else if (this.game.completed === 3) {
      return 1;
    }
  }

  virusVelocityControl() {
    if (this.game.completed === 0) {
      return [200, 200];
    } else if (this.game.completed === 1) {
      return [250, 250];
    } else if (this.game.completed === 2) {
      return [300, 300];
    } else if (this.game.completed === 3) {
      return [300, 300];
    }
  }

  setEnemies() {
    this.enemies = this.physics.add.group();
    this.maxVirus = this.amountEnemies();
    for (var i = 0; i <= this.maxVirus; i++) {
      this.virus = this.enemiesSpriteControl();
      this.virus.setScale(this.enemiesScaleControl());
      this.virusScale;
      this.enemies.add(this.virus);
      this.virus.setRandomPosition(
        0,
        0,
        this.game.config.width,
        this.game.config.height
      );
      this.virus.setVelocity(
        this.virusVelocityControl()[0],
        this.virusVelocityControl()[1]
      );

      //this.virus.setVelocity(200, 200); //
      this.virus.setCollideWorldBounds(true);
      this.virus.setBounce(1);
    }
  }

  backgroundLevelControl() {
    if (this.game.completed === 0) {
      return "background2";
    } else if (this.game.completed === 1) {
      return "background3";
    } else if (this.game.completed === 2) {
      return "background4";
    } else if (this.game.completed === 3) {
      return "background5";
    }
  }

  setBackground() {
    let backgroundLevel = this.backgroundLevelControl();
    this.background = this.add.tileSprite(
      0,
      0,
      this.game.config.width,
      this.game.config.height,
      backgroundLevel
    );
    this.background.setOrigin(0, 0);
  }

  powerUpsAnimations() {
    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("power-up", { start: 0, end: 1 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", { start: 2, end: 3 }),
      frameRate: 20,
      repeat: -1,
    });
  }

  setPowerUps() {
    this.powerUps = this.physics.add.group();
    var maxObjects = 15;
    this.powerUpsAnimations();
    for (var i = 0; i <= maxObjects; i++) {
      this.powerUp = this.physics.add.sprite(16, 16, "power-up");
      this.powerUps.add(this.powerUp);
      this.powerUp.setRandomPosition(
        0,
        0,
        this.game.config.width,
        this.game.config.height
      );
      if (Math.random() > 0.5) {
        this.powerUp.play("red");
      } else {
        this.powerUp.play("gray");
      }

      this.powerUp.setVelocity(100, 100);
      this.powerUp.setCollideWorldBounds(true);
      this.powerUp.setBounce(1);
    }
  }

  addPlayer() {
    this.player = this.physics.add.sprite(
      this.game.config.width / 2 - 8,
      this.game.config.height - 64,
      "ship"
    );
    this.player.setScale(2);
    this.player.setCollideWorldBounds(true);
  }
  firstPlayerState() {
    this.player.disableBody(true, true);
    this.time.addEvent({
      delay: 1000,
      callback: this.resetPlayer,
      callbackScope: this,
      loop: false,
    });
  }

  playerPowerUpsOverlap() {
    this.physics.add.overlap(
      this.player,
      this.powerUps,
      this.pickPowerUp,
      null,
      this
    );
  }

  playerEnemiesOverlap() {
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.hurtPlayer,
      null,
      this
    );
  }

  projectilesEnemiesOverlap() {
    this.physics.add.overlap(
      this.projectiles,
      this.enemies,
      this.hitEnemy,
      null,
      this
    );
  }

  musicLevelControl() {
    if (this.game.completed === 0) {
      return "music_scene2";
    } else if (this.game.completed === 1) {
      return "music_scene3";
    } else if (this.game.completed === 2) {
      return "music_scene4";
    } else if (this.game.completed === 3) {
      return "music_scene5";
    }
  }
  setAudio() {
    this.beamSound = this.sound.add("audio_beam");
    this.explosionSound = this.sound.add("audio_explosion");
    this.pickupSound = this.sound.add("audio_pickup");
    this.ghost = this.sound.add("backRoom");
    this.victory = this.sound.add("victory");

    this.music = this.sound.add(this.musicLevelControl());
    let volumen = 1;
    if (this.game.completed === 3) {
      volumen = 3;
    }
    this.musicConfig = {
      mute: false,

      volume: volumen,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.music.play(this.musicConfig);
  }
  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }
  shootBeam() {
    var beam = new Beam(this);
    this.beamSound.play();
  }

  createScoreLabel() {
    this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE", 16); // font size de 16
    this.scoreLabel.text = "SCORE " + this.zeroPad(this.game.score, 6);
  }
  create() {
    this.lifes = 5;
    this.collect = 15;
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.setBackground();
    this.setEnemies();

    this.input.on("gameobjectdown", this.destroyShip, this); //pending
    this.setPowerUps();

    this.addPlayer();
    this.firstPlayerState();

    this.projectiles = this.add.group();

    this.physics.add.collider(this.projectiles, this.powerUps, function (
      projectile,
      powerUp
    ) {
      projectile.destroy();
    });

    this.playerPowerUpsOverlap();
    this.playerEnemiesOverlap();
    this.projectilesEnemiesOverlap();

    this.setAudio();

    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1,
    });
    this.scoreGraphic();
    this.createScoreLabel();
  }

  update() {
    this.player.anims.play("thrust", true);

    this.background.tilePositionY -= 2.5;
    this.movePlayerManager();
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      if (this.player.active) {
        this.shootBeam();
      }
    }

    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      var beam = this.projectiles.getChildren()[i];
      beam.update();
    }
  }

  movePlayerManager() {
    this.player.setVelocity(0);
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-200);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(200);
    }
    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-200);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(200);
    }
  }
}

export default Space;
