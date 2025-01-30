import fs from "fs";
import bcrypt from "bcrypt";
import readline from "readline";

const userFile = "users.json";
 const LoadFile= () =>{
    if(!fs.existsSync(userFile)){
        return `File is empty`
    }
    return JSON.parse(fs.readFileSync(userFile, 'utf8'));
 }

 const Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout

 });

 const userMenu = (email,name, callback) =>{
    console.log(`Welcome ${name} to our system`);
    console.log(`1.View Profile`);
    console.log(`2.Log out`);

    Interface.question("\nSelect an option",(option) =>{
        switch(option){
            case "1":
                console.log(`\n--- Profile ---\nName: ${name}\nEmail: ${email}\n`);
                userMenu(email,name,callback);
                break;

                case "2":
                    console.log("\nYou have logged out");
                    callback();
                    break;

                    default:
                    console.log("\nInvalid option");
                    userMenu(email,name,callback);

        }
    });


}



 const LoginUser = (callback) => {
    Interface.question('Enter your email: ', (email) => {
        let user = LoadFile();

        if(!user[email]){
            console.log('User not found');
            return callback();
            
        }
        Interface.question('Enter your password: ', (password) => {
            if(bcrypt.compareSync(password, user[email].password)){
                console.log('Login successful');
                userMenu(email,user[email].name,callback);

            }
            else{
                console.log('Incorrect password');
            }
            Interface.close();
        });
    });
}

export const mode ={
    LoginUser 
}
            

            










