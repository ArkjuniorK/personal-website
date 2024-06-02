import { Terminal } from "@xterm/xterm";
import { IComand } from "./interface";

const refresh: IComand = {
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
