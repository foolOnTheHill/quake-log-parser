
class PrettyPrinter {
  // Prints the results to stdout using the format described in the documentation.

  printSummary(summary) {
    for (let i = 1; i < summary.matches; i++) {
      if (summary[i].total_kills > 0) {
        const game_id = 'game_'+i;
        let output = {};
        output[game_id] = summary[i];
        console.log(output);
      }
    }
  }

  printRank(rank) {
    for (let i = 0; i < rank.players.length; i++) {
      const playerName = rank.players[i];
      const rankLine = [playerName, ' (', rank.kills[playerName], ')'];
      console.log(rankLine.join(''));
    }
  }
}

export default PrettyPrinter;
