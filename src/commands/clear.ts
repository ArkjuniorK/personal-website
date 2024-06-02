import { Terminal } from "@xterm/xterm";
import { promptTerminal } from "../util/terminal";
import { IComand } from "./interface";

const clear: IComand = {
  name: "clear",
  desc: "Clear terminal buffers",
  contents: [],
  func: (term: Terminal) => {
    term.clear();
    promptTerminal(term);
    term.focus();
  },
};

export default clear;
