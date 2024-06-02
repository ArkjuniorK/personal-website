import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const tech: ICommand = {
  name: "tech",
  desc: "Technology stack",
  contents: [
    "",
    "  \x1b[1mLanguage:\x1b[0m",
    "  ----------",
    "  Go, Javascript, Typescript, Python, PHP",
    "",
    "  \x1b[1mFrontend:\x1b[0m",
    "  ---------",
    "  Vue, React, TailwindCSS, Bootstrap, JQuery",
    "",
    "  \x1b[1mBackend:\x1b[0m",
    "  --------",
    "  Node.js, Bun.js, Express.js, Fiber, Gin, Fast API, Laravel, GORM, Mongoose",
    "",
    "  \x1b[1mDatabase:\x1b[0m",
    "  ---------",
    "  MongoDB, PostgreSQL, MySQL, Redis",
    "",
    "  \x1b[1mCI/CD:\x1b[0m",
    "  ------",
    "  Docker, Gitlab Runner, Github Action",
    "",
    "  \x1b[1mOther:\x1b[0m",
    "  ------",
    "  Socket.io, GNU/Linux",
  ],
  func: (term: Terminal) => {
    term.writeln(tech.contents.join("\r\n"));
    promptTerminal(term);
  },
};

export default tech;
