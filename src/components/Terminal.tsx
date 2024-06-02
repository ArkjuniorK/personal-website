import { promptTerminal, runTerminalCommand } from "../util/terminal";
import { useEffect, useRef } from "react";
import { ITheme, Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import commands from "../commands";
import "@xterm/xterm/css/xterm.css";

const theme: ITheme = {
  red: "#f7768e",
  blue: "#7aa2f7",
  cyan: "#7dcfff",
  green: "#9ece6a",
  yellow: "#e0af68",
  magenta: "#bb9af7",
  background: "rgb(0, 0, 0, 0)",
};

function TerminalWindow() {
  const termRef = useRef(null);

  let command = "";
  let terminal: Terminal;
  let fitAddon: FitAddon;

  useEffect(() => {
    fitAddon = new FitAddon();
    terminal = new Terminal({
      theme: theme,
      fontSize: 13,
      fontFamily: "IBM Plex Mono, monospace",
      cursorBlink: true,
      allowProposedApi: true,
      allowTransparency: true,
      scrollOnUserInput: true,
    });

    terminal.loadAddon(fitAddon);
    terminal.open(termRef.current as any);
    fitAddon.fit();

    commands.greet.func(terminal);

    terminal.onData((e) => {
      switch (e) {
        // Ctrl+C
        case "\u0003":
          terminal.write("^C");
          promptTerminal(terminal);
          break;

        // Enter
        case "\r":
          runTerminalCommand(terminal, command);
          command = "";
          break;

        // Backspace (DEL)
        // Do not delete the prompt
        case "\u007F":
          terminal.onWriteParsed;

          if (terminal._core.buffer.x > 2) {
            terminal.write("\b \b");
            if (command.length > 0) {
              command = command.slice(0, command.length - 1);
            }
          }

          break;

        // Print all other characters for demo
        default:
          if (
            (e >= String.fromCharCode(0x0061) && e <= String.fromCharCode(0x007a)) ||
            e >= "\u00a0"
          ) {
            command += e;
            terminal.write(e);
          }
      }
    });

    return () => {
      fitAddon.dispose();
      terminal.dispose();
    };
  }, []);

  return (
    <section className="relative w-full lg:w-2/3 xl:w-2/5 h-full lg:h-3/6 xl:h-1/2 p-2 z-20 lg:mx-auto lg:my-auto transition-all ease-in-out duration-500">
      <div className="bg-dark relative h-full w-full  ring-2 ring-white/60 text-black dark:text-white p-3 animate__animated animate__fadeInDown animate__delay-1s">
        <div ref={termRef} className="w-full h-full text-black"></div>
      </div>
    </section>
  );
}

export default TerminalWindow;
