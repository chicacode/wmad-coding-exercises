/**** 

ALGORITHMS
Sorting

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
  } else if (average >= 70) {
    console.log('Grade B')
  } else if (average >= 50) {
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
  } else if (average >= 70) {
    console.log('Grade B');
  } else if (average >= 50) {
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
// printOddNumbers(11); // 0, 1, 3, 5, 7, 9, 11

// Question 2 (ADVANCE)
// Write a function that takes and array as a parameter and calculates the sum of the
// numbers inside the array

// let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // =  45

function sumOfElementsInArray(array) {
  let result = 0;
  for (const element of array) {
    result += element;
  }
  console.log('result', result)
}

// sumOfElementsInArray(numList);

// Question 3 (ADVANCE)
// Wite a Function that takes am array as a parameter and returns
// the largest number inside that array

let numListArr = [20, 40, -10, 55, 40, 5, 11]; // 55
function findLargestNumber(array) {

  array = array.sort();
  let largest = array[0]

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > array[0]) {
      largest = element;
    }
  }
  console.log('largest', largest);
  return largest;
}

// findLargestNumber(numListArr);

/****
 * 
 * Coding Exercises 3
 * Vancouver 09/21/22
 * Geraldine
 * 
 ****/

// Test
//Write a function that takes a value n as a parameter, and prints the following pattern
/*

*
**
***
****
*****
******

*/

function printStarTree(number) {
  let star = "";
  for (let index = 0; index < number; index++) {
    star += "*";
    console.log(star);
  }

}
// printStarTree(6)


// Exercises 3 Question 1
// Write a Fucntion that takes a values n as a parameter, and prints the following pattern:


/* 

*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * *
* * * *
* * *
* *
*
*/

function printInvertedTriangle(n) {
  let star = "";
  for (let index = 0; index < n - 1; index++) {
    star += "* ";
    console.log(star);
  }

  let newStar = "";
  for (let i = 0; i < n; i++) {

    for (let k = 0; k < n - i; k++) {
      newStar += "* ";
    }
    newStar += "\n";
  }
  console.log(newStar);
}

// printInvertedTriangle(6);

// Exercises 3 Question 2
// Write a Function that takes a values n as a parameter, and prints the following pattern:

/*

*****
****
***
**
*

*/

function starDown(n) {

  let star = "";
  for (let index = 0; index < n; index++) {
    for (let j = 0; j < n - index; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star)
}
// starDown(5)

// Exercises 3 Question 3
// Write a Function that takes a values n as a parameter, and prints the following patterm:
/*
        *
      *   *
    *       *
  *  * * * *  *  

*/

// Learning Patterns
function printPiramid(n) {
  let piramid = "";
  // think about numbers of rows = 5
  for (let index = 1; index <= n; index++) {

    // Think about number of spaces
    for (let j = 1; j <= n - index; j++) {
      piramid += " ";
    }

    for (let k = 0; k < 2 * index - 1; k++) {
      if (index === 1 || index === n) {
        piramid += "*";
      } else {
        if (k === 0 || k === 2 * index - 2) {
          console.log('what is:', 2 * index - 2)
          piramid += "*";
        } else {
          piramid += " ";
        }
      }
    }
    piramid += "\n";
  }
  console.log(piramid);
}

// printPiramid(5);

// Binary Search Algorithm:

let array = [3, 7, 90, 10, 22, 45, 23];
array.sort(function (a, b) { return a - b });

function binarySearchAlg(arr, value) {

  let low = 0;
  let high = array.length - 1;
  if (arr === []) {
    return -1;
  }

  while (high >= low) {

    let middle = Math.floor((low + high) / 2);
    if (arr[middle] === value) {

      return middle;
    } else if (arr[middle] < value) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return -1
}

// console.log(binarySearchAlg(array, 45), "Value found");

// Exercise 4
// Quesion 1 Write a function that checks if an array is sorted ?
let numList = [1, 2, 3, 4, 5, 6];
// Sorted array means the value starting --> End, it should be either increasing Or decreasing

// [ 1 , 2, 5, 6, 11, 20 ] // Ascending
// [ 10 , 11, 20 , 5, 4, 20]
// function isSortedList(array) {
//  I don't need two loops cause I'm not sorting I'm just checking
//   // Write your logic here, // HINT: FOR LOOP
//   let isSorted = false;
//   for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array.length; j++) {
//       if(array[j] > array[j+1] ){
//        return isSorted;
//       }  
//     }
//     isSorted = true;
//     return isSorted;
//   }
// }
// [1,2,3,4,5]
// is i = 1 greater than i+1 = 2 

function isAscendingSortedList(array){
  let isSorted = true;
  for (let index = 0; index < array.length; index++) {
      if(array[index] > array[index+1] ){
       return false;
      }  
  }
  return isSorted;
}

// Time complexity - 0(n)
function isDescendingSortedList(array){
  let isSorted = true;
  for (let index = 0; index < array.length; index++) {
  
      if(array[index] < array[index+1] ){
       return false;
      }   
  }
  return isSorted;
}

function isSortedList(direction, array) {

  if(typeof direction !== 'string'){
    console.log('Sorry, you should enter a valid data type');
    return false;
  }

  if(direction === 'asc'){
    console.log('asc')
    return isAscendingSortedList(array)
  }else{
    console.log('desc')
    return isDescendingSortedList(array)
  }
}

// console.log(isSortedList('asc', numList));
// sortedList(numList) // true

console.log(isSortedList('des', [50, 10, 4, 4, 2, 3])); // False

// Exercise 5

function findDuplicatedNumberInSorted(array){
  for (let index = 0; index < array.length; index++) {
    if(array[index] === array[index+1]){
      return array[index];
    }
    
  }
}
console.log(findDuplicatedNumberInSorted([1,2,3,3,5,7,9,10]), 'founded');

// Bubble Sort
// Selection Sort
// Merger Sort

// When is sorted we use one loop, when in not sorted or unserted array we use just two for
// 2 loops Not sorted array
// 1 loop sorted array
// .sort() fn // O(n log n)

// Another solution for findDuplicatedNumberInSorted
// Conditions: Need to be inside a range and no negatives numbers