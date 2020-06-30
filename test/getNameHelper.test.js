import name from '../src/js/getNameHelper';
import simulator from './testHelper';

const input = simulator.inputNameField();

describe('name', () => {
  it('should be defined', () => {
    expect(name).toBeDefined();
  });
  describe('validation', () => {
    it('should be defined', () => {
      expect(name.validation).toBeDefined();
    });
    it('should return true when a validation is correct', () => {
      input.value = 'Julian';
      expect(name.validation()).toBeTruthy();
    });
    it('should set input background to red color when a name validation has not passed', () => {
      input.value = '';
      name.validation();
      expect(input.style.background).toBe('red');
    });
  });
  describe('inputNameField', () => {
    it('should be defined', () => {
      expect(name.inputNameField).toBeDefined();
    });
    it('should create an input box which contain the input to set the player name', () => {
      name.inputNameField();
      expect(document.querySelector('#playerNameBox')).toBeTruthy();
    });
    it('should create an input to set player name', () => {
      expect(document.querySelector('#playerName')).toBeTruthy();
    });
  });
});
