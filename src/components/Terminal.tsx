import { promptTerminal, runTerminalCommand } from "../util/terminal";
import { useEffect, useRef, useState } from "react";
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

// These variables would be initialize when component
// is mount and in order to make consistent we need
// to place it outside of the component.
// Otherwise everytime component
// re-render the value would
// be undefined
let command: string = "";
let terminal: Terminal;
let fitAddon: FitAddon;

// Whenever terminal container's size is changes, reload
// the fitAddon to match the current size of container.
// This way we doesn't need to use React useEffect
const resizeObs = new ResizeObserver(function () {
  fitAddon && fitAddon.fit();
});

function Term(props: any) {
  const termRef = useRef(null);
  const [maximize, setMaximize] = useState(false);

  // Init the terminal, addon, and their
  // event when component is mount.
  useEffect(() => {
    terminal = new Terminal({
      theme: theme,
      fontSize: 13,
      fontFamily: "IBM Plex Mono, monospace",
      cursorBlink: true,
      allowProposedApi: true,
      allowTransparency: true,
      scrollOnUserInput: true,
    });

    fitAddon = new FitAddon();

    terminal.loadAddon(fitAddon);
    terminal.open(termRef.current as any);
    resizeObs.observe(termRef.current as any);

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
      terminal.dispose();
      fitAddon.dispose();
    };
  }, []);

  return props.isOpen ? (
    <section
      className={`relative w-full h-full ${maximize ? "" : "lg:w-2/3 xl:w-2/3 lg:h-3/6 xl:h-2/3"} p-2 z-20 lg:mx-auto lg:my-auto transition-all ease-in-out duration-500`}
    >
      <div className="bg-dark relative h-full w-full rounded-2xl ring-4 ring-white/80 text-black dark:text-white animate__animated animate__zoomIn animate__delay-1s">
        <div className="bg-dark absolute z-10 w-full rounded-t-xl lg:flex px-3 py-2 space-x-2 justify-start sm:hidden">
          <button className="bg-red-400 p-2 rounded-full" disabled></button>
          <button
            className="bg-yellow-400 p-2 rounded-full"
            disabled
          ></button>
          <button
            onClick={() => setMaximize((v) => !v)}
            className="bg-green-400 p-2 rounded-full"
          ></button>
        </div>
        <div className="px-3 pb-3 py-7 w-full h-full relative">
          <div id="terminal" ref={termRef} className="relative w-full h-full"></div>
        </div>
      </div>
    </section>
  ) : null;
}

function TerminalWindow() {
  return (
    <div className="h-full w-full relative flex">
      <Term isOpen={true} />
    </div>
  );
}

export default TerminalWindow;
