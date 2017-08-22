import Consts from './Consts.js';

class BuilderAux {

  add_key(object, key) {
    if (!(key in object)) {
      object[key] = 0;
    }
    return object;
  }

  getPlayerNames(line) {
    let killer = line[5];

    let i = 6;
    for (i; line[i] != Consts.KILLED; i++) {
      killer += ' ' + line[i];
    }

    let victim = line[i+1];
    i += 2;
    for (i; line[i] != Consts.BY; i++) {
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

      if (killer === Consts.WORLD) {
        summary[victim] = Math.max(0, summary[victim]-1);
      } else if (killer !== victim) {
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
