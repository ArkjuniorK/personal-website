import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const expr: ICommand = {
  name: "expr",
  desc: "Working experience",
  contents: [],
  func: (term: Terminal) => {
    term.writeln(expr.contents.join("\r\n"));
    promptTerminal(term);
  },
};

export default expr;
