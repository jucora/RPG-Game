class Scores extends Phaser.Scene {
  constructor() {
    super("scores");
  }

  displayBetterScores(betterScores) {
    let tableContainer = document.createElement("div");
    tableContainer.setAttribute("id", "tableContainer");
    let table = document.createElement("table");
    let row1 = document.createElement("tr");
    let playerNameTitle = document.createElement("th");
    playerNameTitle.textContent = "Player";
    let playerScoreTitle = document.createElement("th");
    playerScoreTitle.textContent = "Score";
    row1.appendChild(playerNameTitle);
    row1.appendChild(playerScoreTitle);
    table.appendChild(row1);

    for (let i = 0; i < 10; i += 1) {
      let rowRecord = document.createElement("tr");
      let playerName = document.createElement("td");
      playerName.textContent = betterScores[i].user;
      let playerScore = document.createElement("td");
      playerScore.textContent = betterScores[i].score;
      rowRecord.appendChild(playerName);
      rowRecord.appendChild(playerScore);
      table.appendChild(rowRecord);
    }
    tableContainer.appendChild(table);
    document.body.appendChild(tableContainer);
  }

  getBetterScores(betterScores) {
    let records = betterScores.result;

    let swapped;
    do {
      swapped = false;

      for (var i = 0; i < records.length; i++) {
        if (records[i] != undefined && records[i + 1] != undefined) {
          if (records[i].score < records[i + 1].score) {
            let tmp = records[i];
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
    let response = await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/",
      { mode: "cors" }
    );
    let data = await response.json();
    this.getBetterScores(data);
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

    this.scoreTitle = this.add.text(
      this.game.config.width / 2,
      50,
      "Leader Board",
      { fontSize: 34 }
    );
    this.scoreTitle.setOrigin(0.5, 0);

    const backtButton = this.add.text(this.game.config.width / 2, 430, "BACK", {
      fontSize: 24,
    });
    backtButton.setOrigin(0.5, 0);
    backtButton.setInteractive();

    backtButton.on("pointerdown", () => {
      this.game.sound.stopAll();
      document
        .querySelector("#tableContainer")
        .parentNode.removeChild(document.querySelector("#tableContainer"));
      this.scene.start("menu");
    });

    this.get();
  }

  update() {
    this.background.tilePositionY -= 2.5;
  }
}

export default Scores;
