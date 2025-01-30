import bcrypt from "bcrypt";//for password encryption
import fs from "fs";//reading files
import readlineSync from "readlineSync";// user input

const user = "users.json";

// Loading the file information
const LoadFile = () => {
    if (!fs.existsSync(user)) return [];
    return JSON.parse(fs.readFileSync(user,'utf8'));//reads the file
}

// Creating a new user
const CreateUser = (user) => {
    fs.writeFileSync(URLSearchParams, JSON.stringify(user, null, 2));//

}