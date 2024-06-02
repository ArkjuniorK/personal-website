import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const project: ICommand = {
  name: "project",
  desc: "Recent projects",
  contents: [],
  func: (term: Terminal) => {
    term.writeln(project.contents.join("\r\n"));
    promptTerminal(term);
  },
};

export default project;
