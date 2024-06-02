import help from "./help";
import greet from "./greet";
import clear from "./clear";
import refresh from "./refresh";
import { IComand } from "./interface";

interface ICommands {
  [index: string]: IComand;
}

const commands: ICommands = { help, greet, clear, refresh };
export default commands;
