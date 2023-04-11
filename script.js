// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = +prompt("Enter first number: "); 
let num2 = +prompt("Enter second number: ");
if (num1 > num2) 
{console.log(num1 + " is greater");
} else
console.log(num2 + " is greater");



// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

let numSign = +prompt("Enter number: ");
if (numSign > 0) 
{alert("The sign is +");}
else if (numSign < 0) 
{alert("The sign is -");}
else {alert("The number is Zero.");}



// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let largest = -Infinity;
for (let i = 1; i <= 5; i++) {
  let num = +prompt("Enter number " + i + ":");     //console.log(num);
  if (num > largest) { 
  largest = num;
  }
}
console.log("The largest number is " + largest);



// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {console.log(i + " is even");} 
    else {console.log(i + " is odd");}
}



// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

let avgMarks = +prompt("Enter Average Marks of Student: ");
if (avgMarks < 60) {console.log("The Grade is F");}
else if (avgMarks < 70) {console.log("The Grade is D");}
else if (avgMarks < 80) {console.log("The Grade is C");}
else if (avgMarks < 90) {console.log("The Grade is B");}
else if (avgMarks <= 100) {console.log("The Grade is A");}



// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let index = 1; index <= 100; index++) {
if (index % 3 === 0 && index % 5 === 0) {console.log("FizzBuzz");}
else if (index % 3 === 0) {console.log("Fizz");}
else if (index % 5 === 0) {console.log("Buzz");} 
else {console.log(index);}
}


// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}
    console.log(pattern);