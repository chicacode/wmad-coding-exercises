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
    if(num1 > num2){
        return console.log('The largest number is: num1', num1);
    }else if(num2 > num1 ){
        return console.log('The largest number is: num2', num2);
    }else{
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

function printEvenNumber(givenNumber){
    for (let n = 1; n < givenNumber; n++) {
      if(n % 2 === 0){
        console.log('Is an Even number: ', n)
      }else{
        console.log('Is Odd number: ', n)
      }
    }
}

// printEvenNumber(12);

// Question 3

/* 
Check if a string contains the letter 'y'. Print 'yes' if it does and 'no' if it does not
*/

function checkLetters(letter){
  let transformLetter = letter.toLowerCase();
  if(transformLetter.includes('y') ){
    console.log('Yes');
  }else{
    console.log('No');
  }
}

// checkLetters('hello'); //No
checkLetters('Yoohoo'); // Yes