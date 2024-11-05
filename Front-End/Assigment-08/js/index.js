// ------------Q1------------
// Write a program that allow to user enter number then printit

/* var userNum = window.prompt("Entey the number");
console.log(userNum); */





// ------------Q2------------
// Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

/* var userNum = Number(window.prompt("Entey the number"));

if (userNum % 3 === 0 && userNum % 4 === 0) {
    console.log("Yes");
} else {
    console.log("No");
} 12; */




// ------------Q3------------
// Write a program that allows the user to insert 2 integers then print the max

/* var userNum1 = Number(window.prompt("Entey first number"));
var userNum2 = Number(window.prompt("Entey second number"));
if (userNum1 > userNum2) {
    console.log(userNum1);
}
else if (userNum2 > userNum1) {
    console.log(userNum2);
}
else {
    console.log("Both numbers are equal");
}
 */





// ------------Q4------------
// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

/* var userNum = Number(window.prompt("Entey the number"));

if (userNum > 0) {
    console.log("Positive");
}
else if (userNum < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
} */




// ------------Q5------------
// Write a program that take 3 integers from user then print the max element and the min element.

/* var userNum1 = Number(window.prompt("Entey first number"));
var userNum2 = Number(window.prompt("Entey second number"));
var userNum3 = Number(window.prompt("Entey third number"));

if (userNum1 > userNum2 && userNum1 > userNum3) {
    console.log("Max: " + userNum1);
    if (userNum2 < userNum3) {
        console.log("Min: " + userNum2);
    }
    else if (userNum2 > userNum3) {
        console.log("Min: " + userNum3);
    }
    else {
        console.log("second number and third number are equel " + userNum2);
    }
}
else if (userNum2 > userNum1 && userNum2 > userNum3) {
    console.log("Max: " + userNum2);
    if (userNum1 < userNum3) {
        console.log("Min: " + userNum1);
    }
    else if (userNum1 > userNum3) {
        console.log("Min: " + userNum3);
    }
    else {
        console.log("first number and third number are equel " + userNum1);
    }
}
else if (userNum3 > userNum1 && userNum3 > userNum2) {
    console.log("Max: " + userNum3);
    if (userNum1 < userNum2) {
        console.log("Min: " + userNum1);
    }
    else if (userNum1 > userNum2) {
        console.log("Min: " + userNum2);
    }
    else {
        console.log("first number and second number are equel " + userNum1);
    }
}
else {
    console.log("All numbers are equal");
} */




// ------------Q6------------
// Write a program that allows the user to insert integer number then check If a number is oven or odd

/* var userNum = Number(window.prompt("Entey the number"));
if (userNum % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
 */




// ------------Q7------------
// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

/* var userChar = window.prompt("Enter a character");
if (userChar === "a" || userChar === "e" || userChar === "i" || userChar === "o" || userChar === "u" || userChar === "A" || userChar === "E" || userChar === "I" || userChar === "O" || userChar === "U") {
    console.log("Vowel");
} else {
    console.log("Consonant");
} */


// ------------Q8------------
// Write a program that allows user to insert integer then print all numbers between 1 to that’s number

/* var userNum = Number(window.prompt("Enter a number"));
for (var i = 1; i <= userNum; i++) {
    console.log(i);
} */



// ------------Q9------------
// Write a program that allows user to insert integer then print a multiplication table up to 12.

/* var userNum = Number(window.prompt("Enter a number"));
for (var i = 1; i <= 12; i++) {
    console.log(userNum + " x " + i + " = " + userNum * i);
} */




// ------------Q10------------
// Write a program that allows to user to insert number then print all even numbers between 1 to this number

/* var userNum = Number(window.prompt("Enter a number"));
for (var i = 2; i <= userNum; i = i + 2) {
    console.log(i);
} */


// ------------Q11------------
// Write a program that take two integers then print the power

/* var userNum1 = Number(window.prompt("Enter a number"));
var userNum2 = Number(window.prompt("Enter the power"));

console.log(userNum1 ** userNum2); */


// ------------Q12------------
// Write a program to enter marks of five subjects and calculate total, average and percentage.

/* var subject1 = Number(window.prompt("Enter marks of subject 1"));
var subject2 = Number(window.prompt("Enter marks of subject 2"));
var subject3 = Number(window.prompt("Enter marks of subject 3"));
var subject4 = Number(window.prompt("Enter marks of subject 4"));
var subject5 = Number(window.prompt("Enter marks of subject 5"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

console.log("Total marks: " + totalMarks);
console.log("Average marks: " + totalMarks / 5);
console.log("Percentage: " + (totalMarks / 500) * 100); */


// ------------Q12------------
// Write a program to input month number and print number of days in that month.

/* var userMonth = Number(window.prompt("Enter a month number (1-12):"));

if (userMonth == 1 || userMonth == 3 || userMonth == 5 || userMonth == 7 || userMonth == 8 || userMonth == 10 || userMonth == 12) {
    console.log("Days in Month: 31");
}
else if (userMonth == 2) {
    console.log("Days in Month: 28");
}
else {
    console.log("Days in Month: 30");
} */


// ------------Q13------------
// Write a program that calculates the factorial of a given integer.

/* var userNum = Number(window.prompt("Enter a number"));
var factorial = 1;
for (var i = 1; i <= userNum; i++) {
    factorial *= i;
}
console.log(factorial);
5; */


// ------------Q14------------
/* (Bounce) Write a program to check if a given integer is an Armstrong number. An
Armstrong number for a given number of digits is an integer such that the sum of
its own digits each raised to the power of the number of digits gives the number
itself. */

/* var userNum = Number(window.prompt("Enter a number"));
var temp = userNum;
var numDigits = 0;
var sum = 0;

while (temp > 0) {
    1;
    temp -= temp % 10;
    temp /= 10;
    numDigits++;
}
console.log("Numeber of Digites : " + numDigits);
temp = userNum;
for (var i = 0; i < numDigits; i++) {
    var digit = temp % 10;
    temp -= temp % 10;
    temp /= 10;
    sum += digit ** numDigits;
}
console.log("sum : " + sum);
if (sum == userNum) {
    console.log(userNum + " is an Armstrong number");
}
else {
    console.log(userNum + " is not an Armstrong number");
} */


// ------------Q15------------
// Write a program that takes a string and returns the number of unique characters in it.
/* var str = window.prompt("Enter a string");
var count = 0;

for (var i = 0; i < str.length; i++) {
    var isUnique = true;

    for (var j = 0; j < i; j++) {
        if (str[i] === str[j]) {
            isUnique = false;
            break;
        }
    }

    if (isUnique) {
        count++;
    }
}

console.log(count); */




// ------------Q16------------
/* Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F */


/* subject1 = Number(window.prompt("Enter marks of Physics"));
var subject2 = Number(window.prompt("Enter marks of Chemistry"));
var subject3 = Number(window.prompt("Enter marks of Biology"));
var subject4 = Number(window.prompt("Enter marks of Mathematics"));
var subject5 = Number(window.prompt("Enter marks of Computer"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

console.log("Percentage: " + (totalMarks / 500) * 100 + "%");

if (percentage >= 90) {
    console.log("Grade: A");
}
else if (percentage >= 80) {
    console.log("Grade: B");
}
else if (percentage >= 70) {
    console.log("Grade: C");
}
else if (percentage >= 60) {
    console.log("Grade: D");
}
else if (percentage >= 40) {
    console.log("Grade: E");
}
else {
    console.log("Grade: F");
} */

// ******************************** Using switch case*******************************
// ------------Q17------------
// Write a program to print total number of days in month

/* var month = Number(window.prompt("Enter the month number (1-12):"));

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 2:
        console.log("28 or 29 days");
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
} */




// ------------Q18------------
// Write a program to check whether an alphabet is vowel or consonant

/* var char = window.prompt("Enter character");

switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log("is a vowel");
        break;
    default:
        console.log("is a consonant");
} */





// ------------Q19------------
// Write a program to find maximum between two numbers

/* var num1 = Number(window.prompt("Enter the first number:"));
var num2 = Number(window.prompt("Enter the second number:"));

switch (true) {
    case (num1 > num2):
        console.log("The maximum number is: " + num1);
        break;
    case (num2 > num1):
        console.log("The maximum number is: " + num2);
        break;
    default:
        console.log("Both numbers are equal.");
} */


// ------------Q20------------
// Write a program to check whether a number is even or odd

/* var num = Number(window.prompt("Enter a number:"));

if (num === 0) {
    console.log("The number is zero");
}
else {
    switch (true) {
        case (num % 2 == 0):
            console.log("The number is even");
            break;

        case (num % 2 == 1):
            console.log("The number is odd");
            break;

        default:
            console.log("Invalid input");
    }
} */




// ------------Q21------------
// Write a program to check whether a number is positive or negative or zero


/* var num = Number(window.prompt("Enter a number:"));
switch (true) {
    case (num > 0):
        console.log("The number is positive");
        break;
    case (num < 0):
        console.log("The number is negative");
        break;
    default:
        console.log("The number is zero");
} */


// ------------Q22------------
// Write a program to create Simple Calculator

/* var num1 = Number(window.prompt("Enter first number:"));
var operator = window.prompt("Enter operator (+, -, *, /):");
var num2 = Number(window.prompt("Enter second number:"));

switch (operator) {
    case '+':
        console.log(num1 + num2);
        break;

    case '-':
        console.log(num1 - num2);
        break;

    case '*':
        console.log(num1 * num2);
        break;

    case '/':
        if (num2 != 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error! Division by zero is not allowed.");
        }
        break;

    default:
        console.log("Invalid operator");
        break;
} */

