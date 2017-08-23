import LogParser from './LogParser.js';
import BuilderAux from './BuilderAux.js';

class Builder {

  constructor(logfile) {
    const logParser = new LogParser();
    this.logs = logParser.getLogs(logfile);
    this.aux = new BuilderAux();
  }

  build() {
    // Abstract method that must be implemented by the child classes.
    throw new Error('Implementation of "build" is required!');
  }

}

export default Builder;
