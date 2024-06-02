import help from "./help";
import expr from "./expr";
import tech from "./tech";
import about from "./about";
import greet from "./greet";
import clear from "./clear";
import project from "./project";
import refresh from "./refresh";
import { ICommands } from "./interface";

const commands: ICommands = { help, expr, tech, about, greet, clear, project, refresh };
export default commands;
