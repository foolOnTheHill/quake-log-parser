import Builder from './Builder.js';
import SummaryBuilder from './SummaryBuilder.js';

class RankBuilder extends Builder {

  constructor(logfile) {
    super(logfile);
    this.summaryBuilder = new SummaryBuilder(logfile, true);
  }

  build() {
    const summary = this.summaryBuilder.build().all; // Builds a summary considering all matches
    let players = summary.players.sort((playerA, playerB) => summary.kills[playerA] - summary.kills[playerB]).reverse(); // Sorts players by number of kills
    let rank = {
      players: players,
      kills: summary.kills,
    };
    return rank;
  }
}

export default RankBuilder;
