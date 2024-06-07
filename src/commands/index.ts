import help from "./help";
import expr from "./expr";
import tech from "./tech";
import work from "./work";
import about from "./about";
import greet from "./greet";
import clear from "./clear";
import refresh from "./refresh";
import { ICommands } from "./interface";

const commands: ICommands = { help, expr, tech, work, about, greet, clear, refresh };
export default commands;
