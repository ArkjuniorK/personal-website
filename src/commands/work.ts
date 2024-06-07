import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const work: ICommand = {
  name: "work",
  desc: "Projects from previous role",
  contents: ["Not available yet, kindly wait!"],
  func: (term: Terminal) => {
    term.writeln(work.contents.join("\r\n"));
    promptTerminal(term);
  },
};

export default work;
