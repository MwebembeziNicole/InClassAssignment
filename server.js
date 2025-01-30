import express from 'express';
import { modes } from './register.js';
import { mode } from './authentication.js';
const app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
    

    const MainMenu = () =>{
        console.log("\n---WELCOME---");
        console.log("1.Register");
        console.log("2.Login");
        console.log("3.Exit");

        modes.register.question("\nSelect an option: ", (choice) => {
            switch (choice){
                case "1":
                    modes.registerUser(MainMenu);

                    case "2":
                        mode.LoginUser(MainMenu);

                        case "3":
                            console.log("Existing application...\n");
                            modes.register();
                            break;

                            default:
                                console.log("Invalid choice. Please try again.");
                                MainMenu();

            }
    })
}
})