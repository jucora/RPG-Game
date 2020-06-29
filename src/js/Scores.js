import create from './create';

class Scores extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  displayBetterScores(betterScores) {
    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('id', 'tableContainer');
    const table = document.createElement('table');
    const row1 = document.createElement('tr');
    const playerNameTitle = document.createElement('th');
    playerNameTitle.textContent = 'Player';
    const playerScoreTitle = document.createElement('th');
    playerScoreTitle.textContent = 'Score';
    row1.appendChild(playerNameTitle);
    row1.appendChild(playerScoreTitle);
    table.appendChild(row1);

    for (let i = 0; i < 10; i += 1) {
      const rowRecord = document.createElement('tr');
      const playerName = document.createElement('td');
      playerName.textContent = betterScores[i].user;
      const playerScore = document.createElement('td');
      playerScore.textContent = betterScores[i].score;
      rowRecord.appendChild(playerName);
      rowRecord.appendChild(playerScore);
      table.appendChild(rowRecord);
    }
    tableContainer.appendChild(table);
    document.body.appendChild(tableContainer);
  }

  getBetterScores(betterScores) {
    const records = betterScores.result;

    let swapped;
    do {
      swapped = false;

      for (let i = 0; i < records.length; i++) {
        if (records[i] != undefined && records[i + 1] != undefined) {
          if (records[i].score < records[i + 1].score) {
            const tmp = records[i];
            records[i] = records[i + 1];
            records[i + 1] = tmp;
            swapped = true;
          }
        }
      }
    } while (swapped);
    this.displayBetterScores(records);
  }

  async get() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/',
      { mode: 'cors' },
    );
    const data = await response.json();
    this.getBetterScores(data);
  }

  backButtonAction() {
    this.backButton.on('pointerdown', () => {
      this.game.sound.stopAll();
      document
        .querySelector('#tableContainer')
        .parentNode.removeChild(document.querySelector('#tableContainer'));
      this.scene.start('menu');
    });
  }

  text() {
    this.scoreTitle = this.add.text(
      this.game.config.width / 2,
      50,
      'Leader Board',
      { fontSize: 34 },
    );
    this.scoreTitle.setOrigin(0.5, 0);
  }

  backButtonAction() {
    this.backButton.on('pointerdown', () => {
      const table = document.querySelector('#tableContainer');
      table.parentNode.removeChild(table);
      this.game.sound.stopAll();
      this.scene.start('menu');
    });
  }

  create() {
    this.get();
    this.background = create.background(this, 'menu');
    this.text();
    this.backButton = create.button(
      this,
      this.game.config.width / 2,
      430,
      'BACK',
      24,
    );
    this.backButtonAction();
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default Scores;
