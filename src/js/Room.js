/** **************** ABOUT THIS CLASS *******************

This scene contains the human player and the 4 portals
which take the player through the different levels
of the game.

/****************************************************** */
/* eslint-disable-next-line import/no-unresolved */
import Phaser from 'phaser';
import create from './create';

class Room extends Phaser.Scene {
  constructor() {
    super('room');
  }

  loadSpace() {
    this.music.pause(this.musicConfig);
    this.scene.start('space');
  }

  addBalls() {
    this.ball1 = this.physics.add.sprite(100, 100, 'ball');
    this.ball2 = this.physics.add.sprite(700, 100, 'ball');
    this.ball3 = this.physics.add.sprite(100, 400, 'ball');
    this.ball4 = this.physics.add.sprite(700, 400, 'ball');
  }

  addPlayer() {
    this.player = this.physics.add.sprite(400, 240, 'human');
    this.player.setScale(2);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
  }

  overlaps() {
    if (this.game.completed === 0) {
      this.physics.add.overlap(
        this.player,
        this.ball1,
        this.loadSpace,
        null,
        this,
      );
    } else if (this.game.completed === 1) {
      this.physics.add.overlap(
        this.player,
        this.ball2,
        this.loadSpace,
        null,
        this,
      );
    } else if (this.game.completed === 2) {
      this.physics.add.overlap(
        this.player,
        this.ball3,
        this.loadSpace,
        null,
        this,
      );
    } else if (this.game.completed === 3) {
      this.physics.add.overlap(
        this.player,
        this.ball4,
        this.loadSpace,
        null,
        this,
      );
    }
  }

  ballAnimations() {
    this.anims.create({
      key: 'ball1',
      frames: this.anims.generateFrameNumbers('ball', { start: 0, end: 1 }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'ball2',
      frames: this.anims.generateFrameNumbers('ball', { start: 2, end: 3 }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'ball3',
      frames: this.anims.generateFrameNumbers('ball', { start: 4, end: 5 }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'ball4',
      frames: this.anims.generateFrameNumbers('ball', { start: 6, end: 7 }),
      frameRate: 20,
      repeat: -1,
    });
  }

  humanAnimations() {
    this.anims.create({
      key: 'stop',
      frames: [{ key: 'human', frame: 1 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('human', { start: 0, end: 2 }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('human', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('human', { start: 6, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('human', { start: 9, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  playBallsAnimation() {
    if (this.game.completed === 0) {
      this.ball1.anims.play('ball1', true);
    } else if (this.game.completed === 1) {
      this.ball2.anims.play('ball2', true);
    } else if (this.game.completed === 2) {
      this.ball3.anims.play('ball3', true);
    } else if (this.game.completed === 3) {
      this.ball4.anims.play('ball4', true);
    } else {
      this.ball1.anims.play('ball1', true);
      this.ball2.anims.play('ball2', true);
      this.ball3.anims.play('ball3', true);
      this.ball4.anims.play('ball4', true);
    }
  }

  PlayerMovementControl() {
    this.player.setVelocity(0);
    if (this.cursors.down.isDown) {
      this.player.setVelocityY(+160);

      this.player.anims.play('down', true);
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);

      this.player.anims.play('up', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('stop', false);
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  create() {
    this.background = create.background(this, 'background1');
    this.addBalls();
    this.ballAnimations();
    this.addPlayer();
    this.humanAnimations();
    this.overlaps();
    this.cursors = create.cursors(this);
    create.musicConfiguration(this, 'music_scene1');
    this.playBallsAnimation();
  }

  update() {
    this.PlayerMovementControl();
  }
}

export default Room;
