import Minimist from 'minimist';

class CliParser {

  constructor(usage, commandsOptions) {
    this.usage = usage;
    this.commandsNames = {};
    this.commandsTypes = {};

    // Organizes the options into hases to make them easy to check later
    for (let i = 0; i < commandsOptions.length; i++) {
      const name = commandsOptions[i].name;
      const flag = commandsOptions[i].flag;
      const type = commandsOptions[i].type;
      this.commandsNames[flag] = name;
      this.commandsTypes[flag] = type;
    }
  }

  _error(message) {
    console.log(message);
    this.printUsage();
    process.exit(-1);
  }

  parse(input) {
    const argv = Minimist(input.slice(2));
    let options = {};

    for (let flag in this.commandsNames) {
      if (!argv[flag]) { // Checks required options
        const message = "Missing required option '-" + flag + "'.";
        this._error(message);
      } else if (typeof argv[flag] != this.commandsTypes[flag]) { // Checks for options types
        const message = "Wrong type for option '-" + flag + "'. It must be a '" + this.commandsTypes[flag] + "'.";
        this._error(message);
      } else {
        options[this.commandsNames[flag]] = argv[flag];
      }
    }

    return options;
  }

  printUsage() {
    console.log(this.usage);
  }
}

export default CliParser;
