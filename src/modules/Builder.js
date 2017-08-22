import LogParser from './LogParser.js';
import BuilderAux from './BuilderAux.js';

class Builder {

  constructor(logfile) {
    const logParser = new LogParser();
    this.logs = logParser.getLogs(logfile);
    this.aux = new BuilderAux();
  }

  build() {
    throw new Error('Implementation of "build" is required!');
  }

}

export default Builder;
