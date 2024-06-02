import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const greet: ICommand = {
  name: "greet",
  desc: "Print greet message",
  contents: [
    " ___________________________________________ ",
    "( Welcome, this is an interactive terminal  )",
    "( Try \x1b[32mhelp\x1b[0m to list available commands       )",
    " ------------------------------------------- ",
    "   o                               ",
    "    o                              ",
    "       .--.                        ",
    "      |o_o |                       ",
    "      |:_/ |                       ",
    "     //   \\ \\                      ",
    "    (|     | )                     ",
    "   /'\\_   _/`\\                       ",
    "   \\___)=(___/                      ",
  ],
  func: (term: Terminal) => {
    term.writeln(greet.contents.join("\n\r"));
    promptTerminal(term);
    term.focus();
  },
};

export default greet;
