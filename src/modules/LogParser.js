import Fs from 'fs';

class LogParser {

  _parseLines(lines) {
    const parsedLines = lines.map(l => l.split(' ').filter(word => word != ''));
    return parsedLines;
  }

  getLogs(filename) {
    const file = Fs.readFileSync(filename, 'utf8').split('\n');
    const logs = this._parseLines(file);
    return logs;
  }
}

export default LogParser;
