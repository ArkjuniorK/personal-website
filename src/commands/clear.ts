import { Terminal } from "@xterm/xterm";
import { promptTerminal } from "../util/terminal";
import { ICommand } from "./interface";

const clear: ICommand = {
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
