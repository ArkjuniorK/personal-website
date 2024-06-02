import { Terminal } from "@xterm/xterm";
import commands from "../commands";

function promptTerminal(term: Terminal) {
  term.write("\r\n> ");
}

function runTerminalCommand(term: Terminal, text: string) {
  const command = text.trim().split(" ")[0];
  if (command.length > 0) {
    term.writeln("");

    const cmd = commands[command];
    if (!cmd) {
      term.writeln(`${command}: command not found`);
      return;
    }

    promptTerminal(term);
  }
}

export { promptTerminal, runTerminalCommand }
