import Minimist from 'minimist';

class CliParser {

  constructor(usage, commandsOptions) {
    this.usage = usage;
    this.commandsNames = {};

    for (let i = 0; i < commandsOptions.length; i++) {
      const name = commandsOptions[i].name;
      const flag = commandsOptions[i].flag;
      this.commandsNames[flag] = name;
    }
  }

  parse(input) {
    const argv = Minimist(input.slice(2));
    let options = {};

    for (let flag in this.commandsNames) {
      if (!argv[flag]) {
        const message = "Missing required option '-" + flag + "'.";
        console.log(message);
        this.printUsage();
        process.exit(-1);
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
