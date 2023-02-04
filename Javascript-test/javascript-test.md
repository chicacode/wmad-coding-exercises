<!-- JavaScript test done by Geraldine Hernandez -->
<!-- Vancouver, 3/2/2023 -->
<!-- Web dev 2 - Cornerstone -->

<!-- https://github.com/knowprabhjyot/E-0922/blob/master/Web%20Dev%20II/Week%202/Day%204%20(Javascript%20Test)/javaScript-test.md -->

1. - ## What is ES6?
     ES6 stands for ECMAScript 6. ECMASCRIPT is a standar for scripting language.
     ECMASCRIPT is a major enhancement in the JAvascript language that allows us to write programs
     more complex. ES6 was created in 2015 is the 6th version of ECMAscript programming language.
     In its major features are import keyword, also provides classes, modules, arrow functions, template literals, desctructuring, promises, among others.

2. - ## Name 3 examples of ES6 features which you learnt.

- let / const keywords
- arrow functions ()=>
- For / of

3.  - ## What is the difference between let and const?
      Although var declarations are globally scoped or function scoped, let and const keywords are block scope. But even these are though are block scoped, there is still difference between these keyowords.
      In `const` the value won't be reassigned, so this keyword allow us to declare constant, which is a variable with a constant value. In `let` the variable may be reassigned.

4.  - ## How do you access object values? Give 3 examples:

- Dot property accessor: object. property. `car.brand`
- Square brackets property accessor: object['property'] `car['brand']`
- Object destructuring: const { property } = object. `const { brand } = car`

5.  - ## What does setInterval and setTimeout do?

setTimeout() is an asynchronous functions that allows us to run executions once after the interval of time. this sets a timer which executes a functions or a piece of code once the timer expires.

setInterval() is a method that repeats a specific functions or piece of code, starting after the interval of time, then repeating continuously at that interval.

What will be the output of the following ?


for (var i = 0 ; i < 5 ; i++) {
setTimeout(() => {
console.log(i); // 5
}, 0);
}

for (let i = 0 ; i < 5 ; i++) {
setTimeout(() => {
console.log(i);  
}, 0);
}

0
1
2
3
4

6. -  ## What are promises?
Is an object representing the eventual completition or failure of an asynchonous operation. Promises represent a value that is promised and once resolved, will always resolve to that same value
Promises have three states: 
1. Fulfilled
2. Rejected
3. Pending

7. -  ## Convert this async function to async/await

getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});

// after this line,

``async function getQuote(quote){
      try {
        let output = await quote;
        console.log(output, "OUTPUT");
    } catch(error) {
        console.log(error);
    }
}``

8. - ## Convert this code to arrow function.

function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

const greeting = (firstname, lastname) => {
    return `Hello ${firstname} ${lastname}`;
}

9. - ## Explain what a callback function is.
Is a function that is passed as an argument in to another function  to complete some kind of routine or action. This technique allows a function to call another fn. A callback fn can run after another fn has finished.

10. - ## What does the functions pop and push do to an array? And what do they return ?

pop() this method is used to remove elements from the back of the array. Pop returns the value that was just removed.

push() method which is used to add new elements  to the end of the array. This function returns the new length of the array.

11. - ## What is the expected answer to this code?

let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string); // 123

``123``

12. ## What data type would Array.map() and Array.filter() return?

MAP: return a new array (collection of values), which is an OBJECT, cause everything in JS comes from an object

FILTER: return a new array, the elements that pass the test. If no elements pass the test it returns an empty array

Output of this 
let array = [1,2,3, 0, 4,10, 0];
let output = array.filter((item) => item); 

``[1, 2, 3, 4, 10]``

 13. - ## What data type would Array.includes() and Array.some() return?

 includes() return a Boolean true if the value is found, otherwise false.
 some() true if any of the array elements pass the test, otherwise false.

14. - ## Write down the 4 main methods of rest API

GET:request to the collection URI retrieves a list of items in the collection
PUT: creates or replaces the resource at the specified URI. The body of the request message specifies the resource to be created or updated.
POST: creates a new resource at the specified URI. The body of the request message provides the details of the new resource
PATCH: performs a partial update of a resource. The request body specifies the set of changes to apply to the resource.
DELETE: Removes the resource at the specified URI.

15. - ## What is the difference between JSON and a JavaScript object?
JSON cannot contain functions. JavaScript objects can contain functions. 
JSON can be created and used by other programming languages. 
JavaScript objects can only be used in JavaScript.

16. - ## Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.

``https://www.boredapi.com/api/activity``

```
function giveMetheAnswer(){
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
```

Response

1. 
````{"activity":"Clean out your closet and donate the clothes you've outgrown","type":"charity","participants":1,"price":0,"link":"","key":"9026787","accessibility":0.1}````

2. jsonResponse 

  ````{activity: 'Organize a bookshelf', type: 'busywork', participants: 1, price: 0, link: '', …}````
3. ````{
    "activity": "Have a photo session with some friends",
    "type": "social",
    "participants": 4,
    "price": 0.05,
    "link": "",
    "key": "3305912",
    "accessibility": 0.8
}```

4. ````{
    "activity": "Mow your neighbor's lawn",
    "type": "charity",
    "participants": 1,
    "price": 0,
    "link": "",
    "key": "1303906",
    "accessibility": 0.2
}````