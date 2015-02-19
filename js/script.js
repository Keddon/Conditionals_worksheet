/**
 * Created by keddoncampbell on 2/19/15 Conditional Worksheet.
 */


/* Problem 1
 Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered.
  If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit,
   the calculator should convert to Fahrenheit.
 */

var results = 0;
var units = prompt("Type 'C' to convert Fahrenheit to Celsius or \n 'F' to convert Celsius to Fahrenheit "); //identifies user input to be celsius of fahrenheit
var striConv = (units == "C") ? units = " degrees Celsius" : units = " degrees Fahrenheit";
var degrees = prompt("What is the number to covert to" + units);
if (units == " degrees Celsius"){ //determines what calculation to use
    results = (degrees - 32)/1.8; //calculates fahrenheit to celsius
}else results = (degrees * 1.8) + 32; //calculates celsius to fahrenheit
console.log("The temperature is "+ results +" "+ units);

/* Problem 2
 Make sure the user has the correct username and password.
  If the username doesn’t match then a specific message for that should be printed to the console.
  If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
*/

var userName = "Username";
var userPass = "Password";

var nameCheck = prompt("Please enter user name");
var passCheck = prompt("please enter password");



if ((userName === nameCheck) && (userPass === passCheck)) {
    console.log("Welcome "+userName+ ", How are you doing today");
}else if ((userName != nameCheck)) {
    console.log("User not found. Please Try Again.");
}else if ((userName === nameCheck) && (userPass != passCheck)){
    console.log("Password does not match our records, please try again.");
}else {
    console.log("Error 404, You broke something.")
}

