# quake-log-parser

A command line tool that reads Quake 3 log files and generates reports.

Requirements
------------
- In order to run the project, you need: *Node js* and *npm* (Node Package Manager)

- Instructions on installing these are available [here](https://docs.npmjs.com/getting-started/installing-node)

Installing
----------
- Download the project
- Install the dependencies running the following command on the project directory:

`` npm install ``

- Compile (using Babel) and bundle (using Rollup)  the files by running:

`` npm run-script bundle ``

Usage
-----

```
quake-log-parser.js -l <logfile> -c <option>
```

- `logfile`: path to the file with the logs
- `command`: what you want the tool to do. Options include `summary` or `rank`.
- `html`: generates HTML containing the rank and outputs it to stdout.

``summary`` outputs using the following format:

```
game_1: {
    total_kills: 45,
    players: ["Dono da bola", "Isgalamido", "Zeh"]
    kills: {
      "Dono da bola": 5,
      "Isgalamido": 18,
      "Zeh": 20
    }
  }
```

`rank` outputs using the following format:

```
Zeh (20)
Isgalamido (146)
Dono da Bola (50)
```

Development options
-------------------
- You can run the following command to watch for changes in `src` and compile and bundle automatically:

`` npm run-script watch ``

The resulting bundle will be created at `/dist/quake-log-parser.s`.

- If you only want to compile the project without bundling you can run:

`` npm build ``

The resulting files will be created at `/build` folder.

- You can run tests on each module by creating a build and then running each file using:

`` node <module_to_test>``
