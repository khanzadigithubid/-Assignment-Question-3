// 3. Friend checker game:

// .  Prompt the user to enter a name.
// .  Use a switch statement to check if the entered name is a known friend.
// .  Output a confirmation message if the name is unknown, otherwise output a default response.

import inquirer from "inquirer";
let user:{name: string}  = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name",
    }
]);

let {name} = user;
let userName = name.toLowerCase();
switch (userName) {
    case "bisma":
         console.log("You're known");
break;
    case "fatima":
        console.log("You're known");
break; 
    case "ahsen":
        console.log("You're known");
break;
    case "sikandar":
        console.log("You're known");
break;
    default:
        console.log("Default response");
}
