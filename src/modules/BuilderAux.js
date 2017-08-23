import Consts from './Consts.js';

class BuilderAux {
  // Contains auxiliary functions used by the builders

  add_key(object, key) {
    if (!(key in object)) {
      object[key] = 0;
    }
    return object;
  }

  getPlayerNames(line) {
    // Since players can have spaces in their names, we need to iterate trough the line until we find some well defined tokens.
    let killer = line[5];

    let i = 6;
    for (i; line[i] != Consts.KILLED; i++) { // Iterate until find 'killed' token
      killer += ' ' + line[i];
    }

    let victim = line[i+1];
    i += 2;
    for (i; line[i] != Consts.BY; i++) { // Iterate until find 'by' token
      victim += ' ' + line[i];
    }

    return {killer:killer, victim: victim};
  }

  build(logs, index, summary) {
    let totalKills = 0;
    let line = logs[index];

    while (index < logs.length && logs[index][1] != Consts.GAME_END) {
      line = logs[index];

      let {killer, victim} = this.getPlayerNames(line);

      summary = this.add_key(summary, victim);

      if (killer === Consts.WORLD) { // <world> is not a player and should not appear in the players list
        summary[victim] = Math.max(0, summary[victim]-1); // the player loses 1 kill every time <world> kills him
      } else if (killer !== victim) { // suicide does not count as a kill
        summary = this.add_key(summary, killer);
        summary[killer] += 1;
      }

      totalKills += 1;
      index += 1;
    }

    return {summary: summary, totalKills: totalKills, index: index};
  }

}

export default BuilderAux;
