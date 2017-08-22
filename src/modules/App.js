import CliParser from './CliParser.js';
import SummaryBuilder from './SummaryBuilder.js';
import RankBuilder from './RankBuilder.js';
import Consts from './Consts.js';

class App {

  constructor() {
    const usage = 'Usage:\nmain.js -l <logfile> -c <option>\n- logfile: path to the file with the logs\n- command: summary or rank"';
    const commands = [
      {
        flag: 'l',
        name: 'logfile'
      },
      {
        flag: 'c',
        name: 'command'
      }
    ];
    this.commandsParser = new CliParser(usage, commands);

    const input = process.argv;
    this.options = this.commandsParser.parse(input);
  }

  run() {
    if (this.options.command === Consts.SUMMARY) {
      // Call SummaryBuilder
    } else if (this.options.command === Consts.RANK) {
      // Call RankBuilder
    } else {
      console.log('Invalid option! "' + this.options.command + '"');
      this.commandsParser.printUsage();
    }
  }

}

export default App;
