import { Terminal } from "@xterm/xterm";

type CommnadFunction = {
  (termArg: Terminal): void;
};

export interface ICommand {
  name: string;
  desc: string;
  contents: Array<string>;
  func: CommnadFunction;
}

export interface ICommands {
  [index: string]: ICommand;
}
