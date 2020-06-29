import Beam from './beam';
import Explosion from './explosion';
import create from './create';

class Space extends Phaser.Scene {
  constructor() {
    super({ key: 'space' });
  }

  scoreGraphic() {
    const graphics = this.add.graphics();
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
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
    const data = { user: this.game.playerName, score: this.game.score };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => console.log('Success:', response));
  }

  collectionControl() {
    if (this.collect < 0) {
      this.music.pause(this.musicConfig);
      this.game.completed += 1;
      if (this.game.completed === 4) {
        this.victory.play();
        this.addScoreToApi();
        this.scene.start('end');
      } else {
        this.ghost.play();
        this.scene.start('room');
      }
    }
  }

  pickPowerUp(player, powerUp) {
    this.collect -= 1;
    this.collectionControl();
    powerUp.disableBody(true, true);
    this.pickupSound.play();
  }

  resetPlayer() {
    const x = this.game.config.width / 2 - 8;
    const y = this.game.config.height + 64;
    this.player.enableBody(true, x, y, true, true);
    this.player.alpha = 0.5;
    const tween = this.tweens.add({
      targets: this.player,
      y: this.game.config.height - 64,
      ease: 'Power1',
      duration: 1500,
      repeat: false,
      onComplete() {
        this.player.alpha = 1;
      },
      callbackScope: this,
    });
  }

  resetShipPos(virus) {
    virus.y = 0;
    const randomX = Phaser.Math.Between(0, this.game.config.width);
    virus.x = randomX;
  }

  lifeControl() {
    if (this.lifes === 0) {
      this.game.score = 0;
      this.music.pause(this.musicConfig);
      this.ghost.play();
      this.scene.start('room');
    }
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

  hurtPlayer(player, enemy) {
    this.resetShipPos(enemy);
    if (this.player.alpha < 1) {
      return;
    }
    new Explosion(this, player.x, player.y);
    this.explosionSound.play();
    this.firstPlayerState();
    this.lifes -= 1;
    this.lifeControl();
  }

  zeroPad(number, size) {
    let stringNumber = String(number);
    while (stringNumber.length < (size || 2)) {
      stringNumber = `0${stringNumber}`;
    }
    return stringNumber;
  }

  incrementScore() {
    this.game.score += 15;
    this.scoreLabel.text = `SCORE ${this.zeroPad(this.game.score, 6)}`;
  }

  hitEnemy(projectile, enemy) {
    new Explosion(this, enemy.x, enemy.y);
    projectile.destroy();
    this.resetShipPos(enemy);
    this.incrementScore();
    this.explosionSound.play();
    this.incrementScore();
  }

  amountEnemies() {
    if (this.game.completed === 0) {
      return 5;
    }
    if (this.game.completed === 1) {
      return 2;
    }
    if (this.game.completed === 2) {
      return 3;
    }
    if (this.game.completed === 3) {
      return 4;
    }
  }

  enemiesSpriteControl() {
    if (this.game.completed === 0) {
      return this.physics.add.sprite(16, 16, 'green_virus');
    }
    if (this.game.completed === 1) {
      return this.physics.add.sprite(16, 16, 'pink_virus');
    }
    if (this.game.completed === 2) {
      return this.physics.add.sprite(16, 16, 'red_virus');
    }
    if (this.game.completed === 3) {
      return this.physics.add.sprite(16, 16, 'pink_virus');
    }
  }

  enemiesScaleControl() {
    if (this.game.completed === 0) {
      return 1;
    }
    if (this.game.completed === 1) {
      return 2;
    }
    if (this.game.completed === 2) {
      return 2;
    }
    if (this.game.completed === 3) {
      return 1;
    }
  }

  virusVelocityControl() {
    if (this.game.completed === 0) {
      return [200, 200];
    }
    if (this.game.completed === 1) {
      return [250, 250];
    }
    if (this.game.completed === 2) {
      return [300, 300];
    }
    if (this.game.completed === 3) {
      return [300, 300];
    }
  }

  setEnemies() {
    this.enemies = this.physics.add.group();
    this.maxVirus = this.amountEnemies();
    for (let i = 0; i <= this.maxVirus; i++) {
      this.virus = this.enemiesSpriteControl();
      this.virus.setScale(this.enemiesScaleControl());
      this.virusScale;
      this.enemies.add(this.virus);
      this.virus.setRandomPosition(
        0,
        0,
        this.game.config.width,
        this.game.config.height,
      );
      this.virus.setVelocity(
        this.virusVelocityControl()[0],
        this.virusVelocityControl()[1],
      );
      this.virus.setCollideWorldBounds(true);
      this.virus.setBounce(1);
    }
  }

  backgroundLevelControl() {
    if (this.game.completed === 0) {
      return 'background2';
    }
    if (this.game.completed === 1) {
      return 'background3';
    }
    if (this.game.completed === 2) {
      return 'background4';
    }
    if (this.game.completed === 3) {
      return 'background5';
    }
  }

  setBackground() {
    const backgroundLevel = this.backgroundLevelControl();
    this.background = create.background(this, backgroundLevel);
  }

  powerUpsAnimations() {
    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('power-up', { start: 0, end: 1 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'gray',
      frames: this.anims.generateFrameNumbers('power-up', { start: 2, end: 3 }),
      frameRate: 20,
      repeat: -1,
    });
  }

  setPowerUps() {
    this.powerUps = this.physics.add.group();
    const maxObjects = 15;
    this.powerUpsAnimations();
    for (let i = 0; i <= maxObjects; i++) {
      this.powerUp = this.physics.add.sprite(16, 16, 'power-up');
      this.powerUps.add(this.powerUp);
      this.powerUp.setRandomPosition(
        0,
        0,
        this.game.config.width,
        this.game.config.height,
      );
      if (Math.random() > 0.5) {
        this.powerUp.play('red');
      } else {
        this.powerUp.play('gray');
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
      'ship',
    );
    this.player.setScale(2);
    this.player.setCollideWorldBounds(true);
  }

  playerPowerUpsOverlap() {
    this.physics.add.overlap(
      this.player,
      this.powerUps,
      this.pickPowerUp,
      null,
      this,
    );
  }

  playerEnemiesOverlap() {
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.hurtPlayer,
      null,
      this,
    );
  }

  projectilesEnemiesOverlap() {
    this.physics.add.overlap(
      this.projectiles,
      this.enemies,
      this.hitEnemy,
      null,
      this,
    );
  }

  musicLevelControl() {
    if (this.game.completed === 0) {
      return 'music_scene2';
    }
    if (this.game.completed === 1) {
      return 'music_scene3';
    }
    if (this.game.completed === 2) {
      return 'music_scene4';
    }
    if (this.game.completed === 3) {
      return 'music_scene5';
    }
  }

  explodeAnimation() {
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
  }

  beamAnimation() {
    this.anims.create({
      key: 'beam_anim',
      frames: this.anims.generateFrameNumbers('beam'),
      frameRate: 20,
      repeat: -1,
    });
  }

  setAudio() {
    this.beamSound = this.sound.add('audio_beam');
    this.explosionSound = this.sound.add('audio_explosion');
    this.pickupSound = this.sound.add('audio_pickup');
    this.ghost = this.sound.add('backRoom');
    this.victory = this.sound.add('victory');
    let volume = 1;
    if (this.game.completed === 3) {
      volume = 3;
    }
    create.musicConfiguration(this, this.musicLevelControl(), volume);
  }

  shootBeam() {
    const beam = new Beam(this);
    this.beamSound.play();
  }

  createScoreLabel() {
    this.scoreLabel = this.add.bitmapText(10, 5, 'pixelFont', 'SCORE', 16);
    this.scoreLabel.text = `SCORE ${this.zeroPad(this.game.score, 6)}`;
  }

  setSpacebar() {
    return this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  create() {
    this.explodeAnimation();
    this.beamAnimation();
    this.lifes = 5;
    this.collect = 15;
    this.cursorKeys = create.cursors(this);
    this.spacebar = this.setSpacebar();
    this.setBackground();
    this.setEnemies();

    this.setPowerUps();

    this.addPlayer();
    this.firstPlayerState();

    this.projectiles = this.add.group();

    this.physics.add.collider(
      this.projectiles,
      this.powerUps,
      (projectile, powerUp) => {
        projectile.destroy();
      },
    );

    this.playerPowerUpsOverlap();
    this.playerEnemiesOverlap();
    this.projectilesEnemiesOverlap();

    this.setAudio();

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('ship'),
      frameRate: 20,
      repeat: -1,
    });
    this.scoreGraphic();
    this.createScoreLabel();
  }

  update() {
    this.player.anims.play('thrust', true);

    this.background.tilePositionY -= 2.5;
    this.movePlayerManager();
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      if (this.player.active) {
        this.shootBeam();
      }
    }

    for (let i = 0; i < this.projectiles.getChildren().length; i++) {
      const beam = this.projectiles.getChildren()[i];
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
