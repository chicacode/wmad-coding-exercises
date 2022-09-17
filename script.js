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

function showTheLarger(num1, num2) {
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
showTheLarger(3, 3); // The numbers num1: 3 & numb2:  3 are equal