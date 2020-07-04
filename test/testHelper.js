const simulator = (() => {
  const inputNameField = () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'playerName');
    document.body.appendChild(input);
    return input;
  };
  /** ***************** API PROCESS SIMULATOR ******************** */
  const leaderBoard = (betterScores) => {
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

    for (let i = 0; i < betterScores.length; i += 1) {
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
  };

  const getBetterScores = (betterScores) => {
    const records = betterScores;

    let swapped;
    do {
      swapped = false;

      for (let i = 0; i < records.length; i += 1) {
        if (records[i] !== undefined && records[i + 1] !== undefined) {
          if (records[i].score < records[i + 1].score) {
            const tmp = records[i];
            records[i] = records[i + 1];
            records[i + 1] = tmp;
            swapped = true;
          }
        }
      }
    } while (swapped);
    return records;
  };

  async function getLeaderBoardSimulator() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/',
      { mode: 'cors' },
    );
    const data = await response.json();
    getBetterScores(data);
    return data;
  }

  /** *********************************************** */

  return {
    inputNameField,
    leaderBoard,
    getBetterScores,
    getLeaderBoardSimulator,
  };
})();

export default simulator;
