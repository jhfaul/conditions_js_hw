var display = document.body.querySelector(".display");
var endEle = document.body.querySelector(".end");
var display1 = document.body.querySelector(".display1");
var display2 = document.body.querySelector(".display2");
var display3 = document.body.querySelector(".display3");

//conditions
var num1 = Number(prompt("Enter your first number."));
if(isNaN(num1)){
  endEle.innerHTML = "That was not a number. Please enter a number.";
}

var num2 = Number(prompt("Enter your second number."));
if(isNaN(num2)){
  endEle.innerHTML = "That was not an number. Please enter a number.";
}  

var oper = (prompt("Enter your operator."));
if (oper == "+" || oper == "-" || oper == "*" || oper == "/") {
  display.innerHTML = "Addition: " + (num1 + num2);
} if (oper = "-") {
  display1.innerHTML = "Subtraction: " + (num1 - num2);
} if (oper = "*") {
  display2.innerHTML = "Multiply: " + (num1 * num2);
} if (oper = "/") {
  display3.innerHTML = "Divide: " + (num1 / num2);
}