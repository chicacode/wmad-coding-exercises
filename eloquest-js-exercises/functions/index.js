// Exercises

// Minimum
function min(a, b) {
  return Math.min(a, b);
}
// console.log(min(3, 10));
// console.log(min(7, 10));
// console.log(min(30, 17));

// Recursion
// 0 = even
// 1 = odd
// N = N - 2

function isEven(a) {

    if(a === 0){
        console.log("enter", typeof a)
        return true;
    }
    if (a === 1) {
        return false
    }
    if(a < 0){
       return isEven(-a);
    }else{
       return isEven(a - 2);
    }
  }

//   console.log(isEven(50));
//   console.log(isEven(75));
//   console.log(isEven(-1));
//   console.log(isEven(20));

function countBs(string) {
// initialized to 0 number
    let number = 0;

    for (let index = 0; index < string.length; index++) {
       if(string.charAt(index) === "B"){
        number+= 1;
        console.log("num", number)
       }  
    }

    return number;
  }
//   console.log(countBs("BBBBBBC")); // 6
  function countChar(a, b){
    let number = 0;

    for (let index = 0; index < a.length; index++) {
        //If the character at the current position is the same as the one the function is looking for, 
        if(a.charAt(index) === b){
            // it adds 1 to a counter variable
         number+= 1;
        }  
     }
     // the counter can be returned.
     return number;
  }
  console.log(countChar("abracadara", "a")); // 5