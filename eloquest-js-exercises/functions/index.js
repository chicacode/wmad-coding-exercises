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

  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
  console.log(isEven(20));