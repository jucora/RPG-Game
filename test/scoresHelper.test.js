import score from '../src/js/scoresHelper';
import simulator from './testHelper';

let json;
let scoresSorted;
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({ json: () => [] });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('getLeaderBoard', () => {
  it('should be defined', () => {
    expect(score.getLeaderBoard()).toBeDefined();
  });
  it('works', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => [
        { user: 'maria', score: '3000' },
        { user: 'julian', score: '1200' },
      ],
    }));

    json = await simulator.getLeaderBoardSimulator();
    expect(
      fetchMock,
    ).toHaveBeenCalledWith(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/',
      { mode: 'cors' },
    );

    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(2);
  });
  describe('getBetterScores', () => {
    it('should take values from API and sort them based on highest score', () => {
      scoresSorted = simulator.getBetterScores(json);
      expect(scoresSorted).toEqual([
        { user: 'maria', score: '3000' },
        { user: 'julian', score: '1200' },
      ]);
    });
  });
  describe('leaderBoard', () => {
    it('should append a leaderBoard into the body to display better scores', () => {
      simulator.leaderBoard(scoresSorted);
      const table = document.querySelector('#tableContainer');
      expect(document.body.children).toContain(table);
    });
  });
});
