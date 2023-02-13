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

// function showTheLongestNumber(num1, num2) {
//   if (num1 > num2) {
//     return console.log('The largest number is: num1', num1);
//   } else if (num2 > num1) {
//     return console.log('The largest number is: num2', num2);
//   } else {
//     return console.log(`The numbers num1: ${num1} & numb2:  ${num2} are equal`);
//   }
// }

// showTheLarger(1, 3); // The largest number is: num2 3
// showTheLarger(3, 1); // The largest number is: num1 3
// showTheLarger(3, 3); // The numbers num1: 3 & numb2:  3 are equal


// Question 2

/*
 Using a For Loop print all even numbers up to and including n. Don't include 0.
*/

// function printEvenNumber(givenNumber) {
//   for (let n = 1; n < givenNumber; n++) {
//     if (n % 2 === 0) {
//       console.log('Is an Even number: ', n)
//     } else {
//       console.log('Is Odd number: ', n)
//     }
//   }
// }

// printEvenNumber(12);

// Question 3

/* 
Check if a string contains the letter 'y'. Print 'yes' if it does and 'no' if it does not
*/

// function checkLetters(letter) {
//   let transformLetter = letter.toLowerCase();
//   if (transformLetter.includes('y')) {
//     console.log('Yes');
//   } else {
//     console.log('No');
//   }
// }

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
// function calculateAverageScore(grade1, grade2, grade3, grade4) {

//   let average = (grade1 + grade2 + grade3 + grade4) / 4;

//   console.log('Average', average);

//   if (average > 90) {
//     console.log('Grade A')
//   } else if (average >= 70) {
//     console.log('Grade B')
//   } else if (average >= 50) {
//     console.log('Grade C')
//   } else {
//     console.log('Grade F')
//   }

// }

// Second

// function calculateAverageScoreFn() {

//   let sum = 0
//   for (let index = 0; index < arguments.length; index++) {
//     sum += arguments[index];
//   }

//   let average = sum / arguments.length;

//   console.log('average', average)

//   if (average > 90) {
//     console.log('Grade A');
//   } else if (average >= 70) {
//     console.log('Grade B');
//   } else if (average >= 50) {
//     console.log('Grade C');
//   } else {
//     console.log('Grade F');
//   }
//   return average;
// }


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

// function printOddNumbers(n) {

//   for (let index = 0; index <= n; index++) {
//     // console.log(index)
//     if (index % 2 !== 0 || index == 0) {
//       console.log('0 & Odd numbers', index)
//     }
//   }
// }

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

// let numListArr = [20, 40, -10, 55, 40, 5, 11]; // 55
// function findLargestNumber(array) {

//   array = array.sort();
//   let largest = array[0]

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element > array[0]) {
//       largest = element;
//     }
//   }
//   console.log('largest', largest);
//   return largest;
// }

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

function isAscendingSortedList(array) {
  let isSorted = true;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      return false;
    }
  }
  return isSorted;
}

// Time complexity - 0(n)
function isDescendingSortedList(array) {
  let isSorted = true;
  for (let index = 0; index < array.length; index++) {

    if (array[index] < array[index + 1]) {
      return false;
    }
  }
  return isSorted;
}

function isSortedList(direction, array) {

  if (typeof direction !== 'string') {
    console.log('Sorry, you should enter a valid data type');
    return false;
  }

  if (direction === 'asc') {
    console.log('asc')
    return isAscendingSortedList(array)
  } else {
    console.log('desc')
    return isDescendingSortedList(array)
  }
}

// console.log(isSortedList('asc', numList));
// sortedList(numList) // true

// console.log(isSortedList('des', [50, 10, 4, 4, 2, 3])); // False

// Exercise 5

function findDuplicatedNumberInSorted(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1]) {
      return array[index];
    }
  }
}
// console.log(findDuplicatedNumberInSorted([1,2,3,3,5,7,9,10]), 'founded');

// Bubble Sort
// Selection Sort
// Merge Sort

// When is sorted we use one loop, when in not sorted or unserted array we use just two for
// 2 loops Not sorted array
// 1 loop sorted array
// .sort() fn // O(n log n)

// Another solution for findDuplicatedNumberInSorted
// Conditions: Need to be inside a range and no negatives numbers


// Exercises 5

// Question 1 Write a function to find the index of the value in the 2D Array


let numListArra = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function findIndex(array, target) {
  // Write the logic
  if (array.length === 0) {
    return -1;
  }
  let newArr = new Array();
  for (let index = 0; index < array.length; index++) {

    for (let j = 0; j < array.length; j++) {
      if (array[index][j] === target) {
        newArr.push(index, j);
        console.log('newA', newArr)
        return newArr;
      }
    }
  }
}

// return [0, 1] // Here 0 is the index of outer array, and 1 is the index of inner array

// console.log(findIndex(numListArra, 5), 'founded'); // [1, 1]

// Question 2 Write a function that takes a string, and capitalizes every first letter of the word

let str = "hello world";

function capitlize(str) {
  // return's first capitalized
  // split a sentence in array of words
  if (!str) {
    return -1
  }
  let wordsInArray = str.split(' ');

  for (let index = 0; index < wordsInArray.length; index++) {
    // uppercase first letter of each word amd concatenates the rest of string
    wordsInArray[index] = wordsInArray[index][0].toUpperCase() + wordsInArray[index].substring(1);
  }
  // [ 'Hello', 'World' ]

  let newWordJoined = wordsInArray.join(" ");
  return newWordJoined;
}

// console.log(capitlize(str)); // Hello World

// HINT - .split method on a string
// .join method on the array


// Question 3 , Write a binary function using recursion (VERY ADVANCE)


// Question 4 , Write a function to find the sum of numbers in an array but using recursion 
function sumNumbers(array) {
  // console.log(array)
  // corner cases
  if (array.length === 0) {
    return 0
  } else {
    return sumNumbers(array.slice(1)) + array[0]
  }
}
// console.log(sumNumbers([2, 3, 4]));
// console.log(sumNumbers([1, 2, 3]));

if (true) {
  var a = 10;
} else {
  var b = 20;
}

// console.log(a);
// console.log(b);

var obj = {
  name: 'Bob',
  age: 30,
  defineThis: function () {
    function a() {
      // console.log(this===obj)
    }
    a()
  },
}

obj.defineThis();

// write a loop
let people = ["Greg", "Mary", "Devon", "James"];
for (let index = 0; index < people.length; index++) {
  console.log("people arr: ", people[index])
}

// remove Greg from arr
let newpeople = people.shift();// remove first ele

console.log("new Atrr: ", people) //  ['Mary', 'Devon', 'James']

// remove James from arr
let newArrPeo = people.pop(); // remove last ele

console.log("new Atrr: ", people) //   ['Mary', 'Devon']

// add first 
let addPeo = people.unshift("Matt");// add in first position
console.log("new Atrr: ", people) // ['Matt', 'Mary', 'Devon']

// add last
let addLastPeo = people.push("Geri");// add in first position
console.log("new Atrr: ", people) // ['Matt', 'Mary', 'Devon', 'Geri']

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let index = 0; index < people.length; index++) {

  if (index > 1) {
    console.log(" after Includes")
    break
  }
  console.log("before includes ", people[index])
}

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let copyOfPeopleArr = people.slice(2, 4); //  ['Devon', 'Geri']
console.log(copyOfPeopleArr);

// Write the command that gives the indexOf where "Mary" is located.

console.log(people.indexOf("Mary")); //1
console.log(people.indexOf("Foo")); //-1

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people) // ['Matt', 'Mary', 'Elizabeth', 'Artie', 'Geri']

let withBob = people.concat("Bob");
console.log(withBob); //  ['Matt', 'Mary', 'Elizabeth', 'Artie', 'Geri', 'Bob']

// REDUCE
// Reduce is HOF(Higher Order Function ) where you can reduce the whole array to  a single value

// For Example
let numListArr = [100, -2, 33, 490, 50098, 66, '10'];

// So you have to write the same logic using reduce but to find minimum value inside the array

let minimunValueOfArr = numListArr.reduce((acc, current) => {
  if (current < acc) {
    return current;
  }

  return acc;

}, Infinity) // Infinity is the maximum valuable possible

console.log(minimunValueOfArr, "USING REDUCE");

// Write a function that filters an array based on the elements which contains the keyword buzz

let arrayBuzz = ['fizz', 'fizzbuzz', 'buzzfizz', 'fiz', 'buzz', 'buzzFizz'];

// output array = ['fizzbuzz', 'buzzfizz', 'buzz', 'buzzFizz']

let filteredBuzzNames = arrayBuzz.filter(word => word.includes("buzz"));
console.log("Buzz: ", filteredBuzzNames)


// TEST


// for (var i = 0 ; i < 5 ; i++) {
//   setTimeout(() => {
//   console.log("for - var - setTimeOut", i);
// }, 0);
// }

// for (let i = 0 ; i < 5 ; i++) {
//   setTimeout(() => {
//   console.log("setTimeOut", i);
// }, 0);
// }


let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

// console.log("Here", string);


let array2 = [1, 2, 3, 0, 4, 10, 0];
let output = array2.filter((item) => {
  console.log(item)
  return item
});

// console.log("output", output)

function giveMetheAnswer() {

  fetch("https://www.boredapi.com/api/activity")
    .then(response => {

      return response.json();
    })
    .then(jsonResponse => {
      return console.log("jsonResponse", jsonResponse);
    }).catch((error) => {
      // Handle the error
      console.log(error);
    })
}
giveMetheAnswer();

//output 
// {"activity":"Clean out your closet and donate the clothes you've outgrown","type":"charity","participants":1,"price":0,"link":"","key":"9026787","accessibility":0.1}


// Rithm Schools
// Functions exercises

// 1. Write a function called myName that logs your full name. Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

function myName(name) {
  return `My name is:: ${name}`
}

let outputName = myName("chica");

console.log(outputName);

// 2. Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".

let favoriteFoods = ["sushi", "water", "veggies", "mushrooms"]

// 3. Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return. For example, your function will return either pizza or ice cream, depending on what you get back 
function randomFood(arrayFood) {

  for (let index = 0; index < arrayFood.length; index++) {
    let output = arrayFood[Math.floor(Math.random() * arrayFood.length)];
    return `His favorite food is:: ${output}`
  }

}

let outPutFood = randomFood(favoriteFoods);
console.log(outPutFood)


let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isOddNumber(arrayNum) {

  const odds = [];
  arrayNum.forEach((num) => {
    if (num % 2 === 1) {
     return odds.push(num);
    }
  });

  return odds;
}

let outpuNumOdd = isOddNumber(arrayNumbers);

console.log("Odd:",outpuNumOdd)


function isEventNumber(arrayNum) {

  const even = [];
  arrayNum.forEach((num) => {
    if (num % 2 === 0) {
     return even.push(num);
    }
  });

  return even;
}

let outpuNumEven = isEventNumber(arrayNumbers);

console.log("Even:", outpuNumEven)

// Create a function called returnFirstOddNumber which iterates over the numbers array and returns the first odd number it finds

