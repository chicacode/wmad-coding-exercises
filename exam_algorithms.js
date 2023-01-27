
let numList = [3,11,7,2,9,10]; // =  42
let numListNegatives = [-1,110,1,1,0]; // = 111
function sumOfElementsInArray(array) {
  let result = 0;
  for (const element of array) {
    result += element;
  }
  console.log('result', result)
}

// sumOfElementsInArray(numList);
// sumOfElementsInArray(numListNegatives);


function removeDuplicates(str){
  if(typeof str !== 'string'){
      return console.log('Invalid data type, only strings accepted')
  }else{
  
    let wordInArray = str.split('');

    const newWord = wordInArray.filter((char, posi)=>{
      return wordInArray.indexOf(char) == posi
    });
    return newWord.join('');
  }
}
// removeDuplicates('abcd');
removeDuplicates('aabbccdd');
console.log(removeDuplicates('aabbccdd'), 'removed')
// removeDuplicates('abcddbca');
// removeDuplicates('abababcdcdcd');

function reverse(str){
  if(str.length <= 1){
    return str;
  }else{
    return str.charAt(str.length -1) + reverse(str.substring(0, str.length -1))
  }
}

console.log(reverse('lol'));
console.log(reverse('reserve'));

let a = 3;
let b = 2;

a = a + b;
b = a - b;

a = a - b;

// console.log('a', a);
// console.log('b', b);

const countPrimes = (n) => {
  const map = []
  for (let i = 2; i < n; i++) {
    map[i] = true
  }
  for (let i = 2; i * i < n; i++) {
    if (map[i]) {
      for (let j = i * i; j < n; j += i) {
        map[j] = false
      }
    }
  }
  return map.filter(num => num === true).length
}

// console.log(countPrimes(100));

function isPalindrome(str){
  str = str.replace(/[^a-z0-9]/i, '').toLowerCase();

  const len = str.length;

  if(len <= 1) return true;
  if(str[0] !== str[len - 1]) return false;

  return isPalindrome(str.slice(1, -1))
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('tacocat'));
