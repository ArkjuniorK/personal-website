import { Terminal } from "@xterm/xterm";
import { ICommand } from "./interface";
import { promptTerminal } from "../util/terminal";

const about: ICommand = {
  name: "about",
  desc: "About me",
  contents: [
    "",
    "        |	  \x1b[36mAbout me:\x1b[0m",
    "       / \\	  \x1b[36m---------\x1b[0m",
    "      / _ \\       \x1b[1mname\x1b[0m: Arkjun Yudistira Pratama",
    "     |.o '.|      \x1b[1mborn\x1b[0m: December, 17th 1999",
    "     |'._.'|      \x1b[1mmbti\x1b[0m: INFP (quiet, open minded and imaginative)",
    "     |     |      \x1b[1mfields\x1b[0m: Fullstack & Backend Engineer",
    "   ,'|  |  |`.    \x1b[1mtitles\x1b[0m: Bachelor of Informatics",
    "  /  |  |  |  \\   \x1b[1mtech_stack\x1b[0m: Go, Node, GNU/Linux, Docker, etc.",
    "  |,-'--|--'-.|               (use `tech` command for more info)",
    "",
    "┌───",
    "│ An open-minded and adaptable INFP with proven experience in developing web",
    "  applications.\x1b[0m \x1b[1mCreative, loyal, and a team player\x1b[0m, I maintain high-quality",
    "  work through best practices.                                                │",
    "                                                                           ───┘",
  ],
  func: (term: Terminal) => {
    const c = about.contents.join("\r\n");
    term.writeln(c);
    promptTerminal(term);
  },
};

export default about;
