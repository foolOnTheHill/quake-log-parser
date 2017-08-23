import Builder from './Builder.js';
import Consts from './Consts.js';

class SummaryBuilder extends Builder {

  constructor(logfile, keepSummary) {
    super(logfile);
    this.keepSummary = keepSummary;
  }

  build() {
    let matchSummary = {};
    let gameMatch = 1;
    let index = 0;
    let totalKills;

    let allSummaries = {};

    while (index < this.logs.length) {
      let line = this.logs[index];

      if (line[1] == Consts.GAME_START) {
        index += 1;

        let auxReturn;
        if (this.keepSummary) {
          auxReturn = this.aux.build(this.logs, index, matchSummary); // Keeps the hash, since we need to consider all game matches
        } else {
          auxReturn = this.aux.build(this.logs, index, {});
        }

        matchSummary = auxReturn.summary;
        totalKills = auxReturn.totalKills;
        index = auxReturn.index;

        let fullSummary = {
          total_kills: totalKills,
          players: Object.keys(matchSummary),
          kills: matchSummary
        };

        // Creates a new entry for the current match
        if (!this.keepSummary) {
          allSummaries[gameMatch] = fullSummary;
        }

        gameMatch += 1;
      }
    }

    allSummaries.matches = gameMatch;

    // Creates only one entry considering all mathes
    if(this.keepSummary) {
      allSummaries['all'] = {
        players: Object.keys(matchSummary),
        kills: matchSummary
      };
    }

    return allSummaries;
  }

}

export default SummaryBuilder;
