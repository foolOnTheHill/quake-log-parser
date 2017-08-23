import CliParser from './CliParser.js';
import SummaryBuilder from './SummaryBuilder.js';
import RankBuilder from './RankBuilder.js';
import Consts from './Consts.js';
import PrettyPrinter from './PrettyPrinter.js';

class App {

  constructor() {
    // Command line options
    const usage = 'Usage:\nmain.js -l <logfile> -c <option>\n- logfile: path to the file with the logs\n- command: summary or rank"';
    const commands = [
      {
        flag: 'l',
        name: 'logfile',
        type: 'string'
      },
      {
        flag: 'c',
        name: 'command',
        type: 'string'
      }
    ];
    this.commandsParser = new CliParser(usage, commands);

    const input = process.argv;
    this.options = this.commandsParser.parse(input);

    this.prettyPrinter = new PrettyPrinter();
  }

  run() {
    if (this.options.command === Consts.SUMMARY) { // Builds a summary
      const summaryBuilder = new SummaryBuilder(this.options.logfile, false);
      const allSummaries = summaryBuilder.build();
      this.prettyPrinter.printSummary(allSummaries);
    } else if (this.options.command === Consts.RANK) { // Builds a rank
      const rankBuilder = new RankBuilder(this.options.logfile);
      const rank = rankBuilder.build();
      this.prettyPrinter.printRank(rank);
    } else { // Shows an error
      console.log('Invalid option! "' + this.options.command + '"');
      this.commandsParser.printUsage();
    }
  }

}

export default App;
