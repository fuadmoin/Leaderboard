import add from './add.js';
import displayAll from './display.js';

export default class Leaderboard {
  constructor(name, number) {
    this.user = name;
    this.score = number;
  }

  static add(data) {
    add(data);
  }

  static displayAll() {
    displayAll();
  }
}