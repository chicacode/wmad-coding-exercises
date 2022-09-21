/**** 

JavaScript Exercises 
created by Geraldine Hernandez Al Attrach in WMAD
Professor: Prabh
Vancouver, 9/17/22

****/

// Question 1:

/*
Write a Javascript program that accept two integers and display the larger
*/

function showTheLongestNumber(num1, num2) {
  if (num1 > num2) {
    return console.log('The largest number is: num1', num1);
  } else if (num2 > num1) {
    return console.log('The largest number is: num2', num2);
  } else {
    return console.log(`The numbers num1: ${num1} & numb2:  ${num2} are equal`);
  }
}

// showTheLarger(1, 3); // The largest number is: num2 3
// showTheLarger(3, 1); // The largest number is: num1 3
// showTheLarger(3, 3); // The numbers num1: 3 & numb2:  3 are equal


// Question 2

/*
 Using a For Loop print all even numbers up to and including n. Don't include 0.
*/

function printEvenNumber(givenNumber) {
  for (let n = 1; n < givenNumber; n++) {
    if (n % 2 === 0) {
      console.log('Is an Even number: ', n)
    } else {
      console.log('Is Odd number: ', n)
    }
  }
}

// printEvenNumber(12);

// Question 3

/* 
Check if a string contains the letter 'y'. Print 'yes' if it does and 'no' if it does not
*/

function checkLetters(letter) {
  let transformLetter = letter.toLowerCase();
  if (transformLetter.includes('y')) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

// checkLetters('hello'); //No
// checkLetters('Yoohoo'); // Yes

// Question 4

/* 
Write a function which accepts 4 parameters (different scores of a student for subjects), and
then calculate the average of all the score.

If the average is more than 90, then console grade A
If the average is between 70 and 90, then console grade B
If the average is between 50-70, then console grade C
Other wise console grade F

*/

// I found two approach
// First
function calculateAverageScore(grade1, grade2, grade3, grade4) {

  let average = (grade1 + grade2 + grade3 + grade4) / 4;

  console.log('Average', average);

  if (average > 90) {
    console.log('Grade A')
  } else if (average >= 70 && average <= 90) {
    console.log('Grade B')
  } else if ((average >= 50 && average < 70)) {
    console.log('Grade C')
  } else {
    console.log('Grade F')
  }

}

// Second

function calculateAverageScoreFn() {

  let sum = 0
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }

  let average = sum / arguments.length;

  console.log('average', average)

  if (average > 90) {
    console.log('Grade A');
  } else if (average >= 70 && average <= 90) {
    console.log('Grade B');
  } else if ((average >= 50 && average < 70)) {
    console.log('Grade C');
  } else {
    console.log('Grade F');
  }
  return average;
}


// calculateAverageScore(100, 90, 78, 85); // Grade B
// calculateAverageScoreFn(78, 100, 100, 99); // Grade A

/****
 * 
 * Coding Exercises 2
 * Vancouver 09/21/22
 * Geraldine
 * 
 ****/


// Question 1
// Print all the odd numbers from 0 to --> n
// Where n will be dynamic insided a function

function printOddNumbers(n) {

  for (let index = 0; index <= n; index++) {
    // console.log(index)
    if (index % 2 !== 0 || index == 0) {
      console.log('0 & Odd numbers', index)
    }
  }
}

// printOddNumbers(3); // 0, 1, 3
// printOddNumbers(11) // 0, 1, 3, 5, 7, 9, 11

// Question 2 (ADVANCE)
// Write a function that takes and array as a parameter and calculates the sum of the
// numbers inside the array

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // =  45

function sumOffElementsInArray(array) {
  let result = 0;
  for (const element of array) {
    result += element;
  }
  console.log('result', result)
}

sumOffElementsInArray(numList)