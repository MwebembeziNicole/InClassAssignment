import bcrypt from "bcrypt";//for password encryption
import fs from "fs";//reading files
import readline from "readline";// user input

const userFile = "users.json";

// Loading the file information
const LoadFile = () => {
    if (!fs.existsSync(userFile)){ return `File empty`;}
    return JSON.parse(fs.readFileSync(userFile,'utf8'));//reads the file
}

// Creating a new user
const CreateUser = (user) => {
    fs.writeFileSync(userFile, JSON.stringify(user, null, 2));//

}
const register = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registerUser = (callback) =>{
    register.question('Enter your name: ', (name) => {
        register.question('Enter your email: ', (email) => {
            let user = LoadFile();
            if (user[email]){
                console.log("Email already exists");
                return callback();
                
            }
            register.question('Enter your password: ', (password) => {
                const hashedPassword = bcrypt.hashSync(password, 10);
                user[email] = {
                    name: name,
                    password: hashedPassword
                    };
                    CreateUser(user);
                    console.log("Registration successfull!");
                    register.close();

        });
    });
});
}
export const modes = {
    registerUser,
    register
}