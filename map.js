// 1. Square each number in the array: [1, 2, 3, 4].

let arr=[1, 2, 3, 4];
console.log(arr.map((num)=>{return num*num}));

// 2. Convert each number in [10, 20, 30] to a string.
let inp= [10,20,30];
console.log(inp.map((num)=> {return `${num}`}));
// 3. Add 5 to every element in [2, 7, 12].

let ar=[2,7,12];
console.log(ar.map(num=>num+5));
// 4. Extract first names from the array of objects: [{firstName:'Amit', lastName:'Sharma'},{firstName:'Sara', lastName:'Khan'}].

 // let object1: [{firstName:'Amit', lastName:'Sharma'},{firstName:'Sara', lastName:'Khan'}];

// 5. Convert all words in ['apple', 'ball', 'cat'] to uppercase.

let word=['apple', 'ball', 'cat'];
console.log(word.map(w=>w.toUpperCase()));
// 6. Return the length of each word in ['mango', 'kiwi', 'banana'].
let len=['mango', 'kiwi', 'banana'];
console.log(len.map(num=>num.length));

// 7. Double each price in [100, 200, 300].
let price=[100, 200, 300];
console.log(price.map(num=>num*2));
// 8. Extract ages from [{name:'Riya', age:20}, {name:'Tom', age:25}].
let age=[{name:'Riya', age:20}, {name:'Tom', age:25}];
console.log(age.map(n=>n.age));
// 9. Append 'JS' to each skill in ['React', 'Node', 'Express'].
let skill= ['React', 'Node', 'Express'];
console.log(skill.map(n=>`${n}JS`));
