import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
   console.log(chalk.yellow("Password gerada:"));
   const password = await handle(); 
   console.log(chalk.white(password));
}

export default createPassword;
