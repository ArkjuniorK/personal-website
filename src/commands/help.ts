import { Terminal } from "@xterm/xterm";
import { promptTerminal } from "../util/terminal";
import { IComand } from "./interface";

import greet from "./greet";
import clear from "./clear";
import refresh from "./refresh";

const help: IComand = {
  name: "help",
  desc: "Display list of available commands",
  contents: [
    "Interactive Portfolio Website v1.0",
    "",
    "\x1b[36mUsage :\x1b[0m",
    "",
    "    \x1b[36mhelp\x1b[0m\tDisplay this help screen",
    "    \x1b[36m" + greet.name + "\x1b[0m\t" + greet.desc,
    "    \x1b[36m" + clear.name + "\x1b[0m\t" + clear.desc,
    "    \x1b[36m" + refresh.name + "\x1b[0m\t" + refresh.desc,
  ],
  func: (term: Terminal) => {
    term.writeln(help.contents.join("\r\n"));
    promptTerminal(term);
    term.focus();
  },
};

export default help;
