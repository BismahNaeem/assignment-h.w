#! /usr/bnv/env node
//SHABANG
import inquirer from "inquirer";
//variable for id
let email1 = "bianaeem17@gmail.com";
//variable for password
let password = "hellobia123";
//1st question
const pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your Email id: ",
        type: "string"
    }]);
//2nd question
let password1 = await inquirer.prompt([{
        name: "myPassword",
        message: "Enter your password: ",
        type: "string"
    }]);
//conditional statement
if (pinAnswer.pin === email1 && password1.myPassword === password) {
    console.log("correct email id thankhyou for login: ");
}
else {
    console.log("invalid id or password");
}
