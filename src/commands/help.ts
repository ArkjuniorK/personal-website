import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

import expr from "./expr";
import tech from "./tech";
import greet from "./greet";
import clear from "./clear";
import about from "./about";
import refresh from "./refresh";

const help: ICommand = {
  name: "help",
  desc: "Display list of available commands",
  contents: [
    "Interactive Porsonal Website v1.0",
    "",
    "\x1b[32mUsage :\x1b[0m",
    "",
    "    \x1b[32mhelp\x1b[0m\tDisplay this help screen",
    "    \x1b[32m" + expr.name + "\x1b[0m\t" + expr.desc,
    "    \x1b[32m" + tech.name + "\x1b[0m\t" + tech.desc,
    "    \x1b[32m" + about.name + "\x1b[0m\t" + about.desc,
    "    \x1b[32m" + greet.name + "\x1b[0m\t" + greet.desc,
    "    \x1b[32m" + clear.name + "\x1b[0m\t" + clear.desc,
    "    \x1b[32m" + refresh.name + "\x1b[0m\t" + refresh.desc,
  ],
  func: (term: Terminal) => {
    term.writeln(help.contents.join("\r\n"));
    promptTerminal(term);
    term.focus();
  },
};

export default help;
