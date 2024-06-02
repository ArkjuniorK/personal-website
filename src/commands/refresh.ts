import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";

const refresh: ICommand = {
  name: "refresh",
  desc: "Reload this page",
  contents: [],
  func: (term: Terminal) => {
    term.writeln("Please wait...");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  },
};

export default refresh;
