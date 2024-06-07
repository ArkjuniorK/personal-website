import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const expr: ICommand = {
  name: "expr",
  desc: "Working experience",
  contents: [
    "",
    // "┌ \x1b[1mExperience\x1b[0m ────────────────────────────────────────────────────────────────────────┐",
    "  \x1b[31mBackend Engineer\x1b[0m                                                                   ",
    "  PT. Rumah Logic Teknologi                                                          ",
    "  Dec 2022 - Dec 2023                                                                ",
    "  -------------------------                                                          ",
    "  - Developed a robust and scalable web-based video management application.          ",
    "  - Implemented a multi-resolution video streaming feature using HLS.                ",
    "  - Built a microservices-based web dashboard application with an API Gateway.       ",
    "  - Integrated external APIs into the dashboard system using Goroutines.             ",
    "  - Established a CI/CD pipeline for efficient development and deployment.           ",
    "  - Maintained high code quality through code reviews and unit tests.                ",
    "                                                                                     ",
    "  \x1b[34mFullstack Engineer\x1b[0m                                                                 ",
    "  PT. Bayanaka Destina Nusantara                                                     ",
    "  Jan 2021 - Dec 2022                                                                ",
    "  ------------------------------                                                     ",
    "  - Kept existing systems running smoothly and up-to-date.                           ",
    "  - Effectively collaborated with team members and stakeholders.                     ",
    "  - Delivered high-quality web and desktop products.                                 ",
    "  - Wrote maintainable and reusable code.                                            ",
    "  - Ensured code reliability through rigorous testing.                               ",
    "  - Streamlined development and deployment processes with Bitbucket CI/CD.           ",
    "                                                                                     ",
    "  \x1b[33mWeb Developer\x1b[0m (Intership)                                                          ",
    "  Sinjai Regency Regent's Office                                                     ",
    "  Jan 2020 - March 2020                                                              ",
    "  ------------------------------                                                     ",
    "  - Created a user-friendly and accessible web app for the Sinjai Regent's agenda.    ",
    "  - Implemented modern web development practices and PWA features.                    ",
    "                                                                                      ",
    // "└────────────────────────────────────────────────────────────────────────────────────┘",
  ],
  func: (term: Terminal) => {
    term.writeln(expr.contents.join("\r\n"));
    promptTerminal(term);
  },
};

export default expr;
