import Fs from 'fs';
import Consts from './Consts.js';

class LogParser {

  _parseLines(lines) {
    let parsedLines = lines.map(l => l.split(' ').filter(word => word != ''));
    // Only keeps the lines representing game start, end and kill events
    parsedLines = parsedLines.filter(words => words[1] === Consts.KILL || words[1] === Consts.GAME_START || words[1] === Consts.GAME_END);
    return parsedLines;
  }

  getLogs(filename) {
    try {
      const file = Fs.readFileSync(filename, 'utf8').split('\n'); // Since it's a command line tool, it's not a big deal to read the file synchronously
      const logs = this._parseLines(file);
      return logs;
    } catch(err) {
      console.log(err.message);
      process.exit(-1);
    }
  }
}

export default LogParser;
