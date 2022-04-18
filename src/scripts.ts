/* eslint-disable max-len */
// // Task #-4
// // car[1].name // Volvo
//
// const car = [
//     {},
//     {
//         name: "Volvo",
//     },
// ]

// console.log(car[1].name)
//
// // Task #-3
// // car.sum() // return 3000000EUR
//
// const car1 = {
//     sum: () => {
//         return "3000000EUR"
//     },
// }

// console.log(car1.sum())
//
// // Task #-2
// // car.model.color // returns red

// const car2 = {
//     model: {
//         color: "red",
//     },
// }

// console.log(car2.model.color)
//
// // Task #-1
// // Make an object which fruit[0][1]; // returns 'Apple'

// const fruit = [[[], ["Apple"]]]

// console.log(fruit[0][1])
//
// // Task #0
// // human.name('Jānis') // returns Jānis

// const human = {
//     name: (name: string) => name,
// }

// console.log(human.name("Jānis"))
//
// // Tasks #1
// // math.sum()()(1,3).sum // return 13

// const math = {
//     sum: () => () => (number1: number, number2: number) => ({
//         sum: Number(`${number1}${number2}`),
//     }),
// }

// console.log(math.sum()()(1, 3).sum)
//
// // Task #2
// // human().rights[2][1].amendment[2].paragraph() // 'Lorem Ipsum'
//
// const human1 = () => ({
//   rights: [
//     [],
//     [],
//     [
//       [],
//       {
//         amendment: [
//           {},
//           {},
//           {
//             paragraph: () => 'Lorem Ipsum',
//           },
//         ],
//       },
//     ],
//   ] as any,
// });

// console.log(human1().rights[2][1].amendment[2].paragraph());

// Task #3
// returns powered x with y and sum powered by Z
// math(x, y)()()()()()()()()(z) //
// const mathFn = (x:number, y:number) => {
//     const powered = x * y;
//     return () => () => () => () => () => () => () => () => (z:number) => powered * z;
//   };

//   console.log(mathFn(2, 3)()()()()()()()()(2));

// Task #4
// Take animal array from
// https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
// Filter out Animals with letters "A" "Z" "U" "G" and capitalize it
// const azug = animalArray.filter(animals =>
// animals.match(/([AZUG])\w+/g)).join(" ").toUpperCase().split(" ");

// Task #5
// take array from https://stackoverflow.com/a/20623472/2927424
// filter out countries that have less than 6 characters
// modify array without nativeName key
// const filteredCountries = countryArray.filter((country) => {
//     delete country.nativeName
//     return country.name.length > 6
//     });
//
// 1.
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

// const sum = (a:number, b:number):number => {
//     return a + b;
// };
// console.log(sum(1, 99));

// 2.
// Write a function that takes a value as argument
// Return the type of the value
// const valueType = (value: any) => {
//     return typeof value;
// };
//
// console.log(valueType(['array']));

// 3.
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// const equal = (a:any, b:any):boolean => {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
//
// };
// console.log(equal('3', '3'));

// 4.
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
// const nthChar = (a:string, n:number):string => {
//     return a.charAt(n - 1);
// };
//
// console.log(nthChar('gfedcba', 3));

// 5.
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
// const removeFirstThreeChars = (a:string):string => {
//     return a.substr(3);
// };
//
// console.log(removeFirstThreeChars('fgedcba'));

// 6.
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
// const lastThreeChars = (a:string):string => {
//     return a.substr(a.length - 3);
// };
//
// console.log(lastThreeChars('fgedcba'));

// 7.
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
// const firstThreeChars = (a:string):string => {
//     return a.substr(0, 3);
// };
//
// console.log(firstThreeChars('fgedcba'));

// 8.
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
// const firstHalf = (a:string):string => {
//     return  a.substr(0, a.length / 2);
// };
//
// console.log(firstHalf('gedcba'));

// 9.
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
// const removeLastThreeChars = (a:string):string => {
//     return a.substr(0, a.length - 3);
// };
//
// console.log(removeLastThreeChars('fgedcba'));

// 10.
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
// const bPercentOfA = (a:number, b:number):number => {
//     return a / 100 * b;
// };
//
// console.log(bPercentOfA(500, 25));

// 11.
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// const sixValuesMath = (a:number, b:number, c:number, d:number, e:number, f:number):number => {
//     return Math.pow(((a + b - c) * d / e), f);
// }
//
// console.log(sixValuesMath(2,3,6,4,2,3));

// 12.
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
// const oddOrEven = (a:number):boolean => (a % 2 === 0);
//
//
// console.log(oddOrEven(10));

// 13.
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
// const charCount = (a:string, b:string):number => {
//
//   const aArr = b.split('').filter((char) => char === a);
//   return aArr.length;
// };
//
// console.log(charCount('z', 'how many times does the character occur in this sentence?'));

// 14.
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
// const isInteger = (a:number):boolean => Number.isInteger(a);
//
// console.log(isInteger(1048));

// 15.
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
// const devideOrMultiply = (a:number, b:number):number => {
//     let result = 0;
//     if (a < b) {
//         result = a / b;
//     } else {
//         result = a * b;
//     }
//     return result;
// };
//
// console.log(devideOrMultiply(2, 0.5));

// 16.
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
// const doesAContainB = (a:string, b:string):string => {
//   let result;
//     if (a.includes(b)) {
//     result = b.concat(a);
//   } else {
//     result = a.concat(b);
//   }
//   return result
// };
// console.log(doesAContainB(' think, therefore I am', 'I'));

// 17.
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
// const roundToSecondDigit = (a:number):number => a.toFixed(2);
//
// console.log(roundToSecondDigit(26.1379));

// 18.
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// const splitNumber = (a:number):Array => a.toString().split('');
//
// console.log(splitNumber(193278));

// 19.
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
// const clearStrings = (a:string, b:string):string => {
//     const cleanA = a.replace(/[^a-zA-Z ]/g, "");
//     const upperCaseFirstChar = cleanA.charAt(0).toUpperCase();
//     const correctA = cleanA.replace(cleanA.charAt(0), upperCaseFirstChar);
//     const correctB = b.replace(/[^a-zA-Z ]/g, "").split('').reverse().join('');
//     return correctA.concat(correctB);
// };
//
// console.log(clearStrings('down', 'nw%ot'));

// 20.
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
// const primeNumber = (a:number) => {
//     const checkIfPrime = (a:number) => {
//     let root = Math.ceil(Math.sqrt(a));
//     for (let i = 2; i <= root; i ++) {
//         if (a % i === 0) {
//             return false
//         }
//     }
//             return true
// }
// if (checkIfPrime(a)) {
//     return a;
//     } else {
//     while (checkIfPrime(a) === false) {
//         a++;
//       }
//     }
//     return a;
// };
// console.log(primeNumber(2000));

// 20.

// const primeNumber = (a: number): number => {
//     for (let i = 2; i < a; i++) {
//       if (a % i === 0) {
//         return primeNumber(a + 1)
//       }
//     }
//     return a
//   };

//   console.log(primeNumber(2000));

// 21.
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
// const numberDevisible = (x:number, y:number):number => {
//     while (x % y !== 0) {
//         x ++;
//     }
//     return x;
// };

// console.log(numberDevisible(-5, 7));

// 22.
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
// const insertString = (a:string, b:string):string => {

//     const strArr = a.split('');
//     for (let i = strArr.length - 3; i >= 0; i -= 3) {
//         strArr.splice(i, 0, b);
//     }
//     return strArr.join('');
// };

// console.log(insertString('zxyzxyzxyzxyzxyz', 'w'));

// 23.
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
// const nextToCharacter = (a: string): string => {
//     let newString = ""
//     for (let i = 0; i < a.length; i++) {
//       newString += String.fromCharCode(a.charCodeAt(i) + 1)
//       }

//     return newString
//   };

// console.log(nextToCharacter('bnchmf'));

// 23.

// const nextToCharacter = (a: string): string => {
//     let newString = ""
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] === "z") {
//         newString += "a"
//       } else {
//         newString += String.fromCharCode(a.charCodeAt(i) + 1)
//       }
//     }
//     return newString
//   }

// console.log(nextToCharacter('bnchmf'));

// 24.
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
// const nthElement = (a:Array, b:number):number => a[b-1];

// console.log(nthElement([7,2,1,6,3],1));

// 25.
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
// const removeFirstThree = (a:Array):Array => a.splice(3, 3)

// console.log(removeFirstThree([5,4,3,2,1,0]));

// 26.
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
// const lastThreeElements = (a:Array):Array => a.splice(a.length - 3)

// console.log(lastThreeElements([99,1,1]));

// 27.
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

// const firstThreeElements = (a:Array):Array => a.splice(0, 3)

// console.log(firstThreeElements([99,1,1]));

// 28.
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
// const lastNElements = (a:number[], b:number):Array => a.splice(a.length - b, b);

// console.log(lastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// 29.
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
// const removeB = (a:Array, b:number):Array => {
//     let arr = '';
//     for (let i = 0; i < a.length; i ++) {
//         if (a[i] === b) {
//             a.splice(i, 1)
//         }
//     }
//     return a;
// };

// console.log(removeB([1,2,'2',1], 1));

// 30.
// Write a function that takes an array (a) as argument
// Return the number of elements in a
// const lengthOfAnArr = (a:number[]):Array => a.length;

// console.log(lengthOfAnArr([4,3,2,1,0]));

// 31.
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// const negativeValues = (a:number[]):number => {
//     let count = 0;
//     for (let i = 0; i < a.length; i ++){
//         if (a[i] < 0){
//             count ++;
//         }
//     }
//     return count;
// };

// console.log(negativeValues(([4,-3,2,1,0]));

// 32.
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
// const descendingOrder = (a:number[]):number[] => a.sort((a,b) => (a > b ? -1 : 1));

// console.log(descendingOrder([4,2,3,1]));

// 33.
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
// const sortAbc = (a:string[]):string[] => a.sort();

// console.log(sortAbc(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// 34.
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
// const averegeNum = (a:number[]):number => {
//     let sum = 0;
//     for (let i = 0; i < a.length; i ++) {
//         sum = (sum + a[i]);
//     }
//     return sum / a.length;
// };

// console.log(averegeNum([-50,0,50,200]));

// 35.
// Write a function that takes an array of strings as argument
// Return the longest string
// const longestStr = (a:string[]):string => {
//     let length = 0;
//     let longest = '';
//     for (let i = 0; i < a.length; i ++) {
//         if (a[i].length > length) {
//             length = a[i].length;
//             longest = a[i];
//         }
//     }
//     return longest;
// };

// console.log(longestStr(['I', 'need', 'candy']));

// 36.
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
// const allEqual = (a:Array):boolean => {
//     for (let i = 0; i < a.length; i ++) {
//         for (let j = 0; j < a.length; j ++) {
//             if (a[i] !== a[j]) {
//                 return false;
//             } else {
//             }
//         }
//         return true;
//     }
// };

// console.log(allEqual([true, true, true, true]));
// console.log(allEqual(['test', 'test', 'test']));
// console.log(allEqual([1, 1, 1, 2]));
// console.log(allEqual(['10', 10, 10, 10]));
// console.log(allEqual([10, 10, 10, 10, 10, 10, 10, 10, 10]));

// 37.
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// const sumArbitraryArrays = (...args):Array => {
//     let arguments = [...args];
//     let sumArr = [];
//     for (let i = 0; i < arguments.length; i ++) {
//         sumArr = [].concat(...arguments)
//     }
//     return sumArr;
// };

// console.log(sumArbitraryArrays([1, 2, 3], [4, 5, 6]));
// console.log(sumArbitraryArrays(['a', 'b', 'c'], [4, 5, 6]));
// console.log(sumArbitraryArrays([true, true], [1, 2], ['a', 'b']));

// 38.
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
// const sortObjByB = (a:Object[]) => {
//     return a.sort((a, b) => a.b - b.b)
// };

// console.log(sortObjByB([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
// console.log(sortObjByB([{a:2, b:10},{a:5, b:4}]));
// console.log(sortObjByB([{a:1, b:7},{a:2, b:1}]));

// 39.
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
// const doThingsToArrays = (a:number[], b:number[]) => {
//     const c = a.concat(b);
//     c.sort((a, b) => a - b);
//     for (let i = 0; i < c.length; i++) {
//         for (let j = i+1; j < c.length; j++) {
//             if (c[i] === c[j]) {
//                 c.splice(i, 1);
//             }
//         }
//     }
//     return c;
// };

// console.log(doThingsToArrays([1, 2, 3], [3, 4, 5]));
// console.log(doThingsToArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// 40.
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
// const sumElementsValueGreaterThanB = (a:number[], b:number):number => {
//    const filtered = a.filter(element => element > b);
//    const initialValue = 0;
//    const sum = filtered.reduce((a, b) => a + b, initialValue);
//    return sum;
// };

// console.log(sumElementsValueGreaterThanB([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(sumElementsValueGreaterThanB([-10, -11, -3, 1, -4], -3));
// console.log(sumElementsValueGreaterThanB([78, 99, 100, 101, 401], 99));

// 41.
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
// const minMax = (a:number, b:number):number[] => {
//     const rangeArr = [];
//     for (let i = a; i <= b; i++) {
//         rangeArr.push(i);
//     }
//     return rangeArr;
// };

// console.log(minMax(2, 10));
// console.log(minMax(1, 3));
// console.log(minMax(-5, 5));
// console.log(minMax(2, 7));

// 42.
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
// const groupByFirstLetter = (a: any[]): { [key: string]: string[] } => {
//     return a.reduce((acc, curr) => {
//         const firstLetter = curr[0].toLowerCase()
//         if (!acc[firstLetter]) {
//             acc[firstLetter] = []
//         } acc[firstLetter].push(curr)
//         return acc }, {}) };

//         console.log(groupByFirstLetter(['Alf', 'Alice', 'Ben']));
//         console.log(groupByFirstLetter(['Ant', 'Bear', 'Bird']));
//         console.log(groupByFirstLetter(['Berlin', 'Paris', 'Prague']));

// 43.
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
// const unshiftSixOrZero = (a:any[], b:number):any[] => {
//     let c = [...a];
//     if (b >= 6) {
//         c.unshift(b);
//     } else {
//         c.unshift(0);
//     }
//     return c;
// };

// console.log(unshiftSixOrZero([1, 2, 3], 6));
// console.log(unshiftSixOrZero(['a', 'b'], 2));
// console.log(unshiftSixOrZero([null, false], 11));

// 44.
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
// const everyNth = (a:number[], b:number):number[] => {
//     let newArr = [];
//     for (let i = b - 1; i < a.length; i += b) {
//         newArr.push(a[i]);
//     }
//     return newArr;
// };

// console.log(everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(everyNth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
// console.log(everyNth([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

// 45.
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
// const keyCountry = (a:obj):string => {
//     return a.country;
// };

// console.log(keyCountry({ continent: 'Asia', country: 'Japan' }));
// console.log(keyCountry({ country: 'Sweden', continent: 'Europe' }));

// 46.
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
// const keyPropTwo = (a:Object) => {
//     return a['prop-2'];
// };

// console.log(keyPropTwo({ one: 1, 'prop-2': 2 }));
// console.log(keyPropTwo({ 'prop-2': 'two', prop: 'test' }));

// 47.
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// const keyValueStringPropery = (a:Object, b:string):string => a[b];

// console.log(keyValueStringPropery({ continent: 'Asia', country: 'Japan' }, 'continent'));
// console.log(keyValueStringPropery({ country: 'Sweden', continent: 'Europe' }, 'country'));

// 48.
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
// const ifHasPropery = (a:Object, b:string):boolean => {
//   if (a[b]) {
//     return true;
//   }
//   return false;
// };

// console.log(ifHasPropery({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(ifHasPropery({ x: 'a', y: 'b', z: 'c' }, 'a'));
// console.log(ifHasPropery({ x: 'a', y: 'b', z: 'c' }, 'z'));

// 49.
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
// const createObjectWithKEyA = (a:string):Object => {
//     return { key: a };
// };

// console.log(createObjectWithKEyA('a'));
// console.log(createObjectWithKEyA('z'));
// console.log(createObjectWithKEyA('b'));

// 50.
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// const createObjectAB = (a:string, b:string):Object => ({ [a]: b });

// console.log(createObjectAB('a', 'b'));
// console.log(createObjectAB('z', 'x'));
// console.log(createObjectAB('b', 'w'));

// 51.
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
// const crateObjectsFromTwoStrings = (a:any[], b:any[]):Object => {
//     const result = Object.assign.apply({}, a.map((v, i) => ({ [v]: b[i] })));
//     return result;
// };

// console.log(crateObjectsFromTwoStrings(['a', 'b', 'c'], [1, 2, 3]));
// console.log(crateObjectsFromTwoStrings(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
// console.log(crateObjectsFromTwoStrings([1, 'b'], ['a', 2]));

// 52.
// Write a function that takes an object (a) as argument
// Return an array with all object keys
// const arrayObjectKEys = (a:Object):string[] => Object.keys(a);

// console.log(arrayObjectKEys({ a: 1, b: 2, c: 3 }));
// console.log(arrayObjectKEys({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(arrayObjectKEys({ w: 15, x: 22, y: 13 }));

// 53.
// Write a function that takes an object (a) as argument
// Return the sum of all object values
// // const sumAllObjValues = (a:Object):number => {
//  return Object.keys(a).reduce((sum,key)=> sum+parseFloat(a[key]||0),0);
// };

// console.log(sumAllObjValues({ a: 1, b: 2, c: 3 }));
// console.log(sumAllObjValues({ j: 9, i: 2, x: 3, z: 4 }));
// console.log(sumAllObjValues({ w: 15, x: 22, y: 13 }));

// 54.
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// const removeKeyB = (a:Object):Object => {
//     delete a['b'];
//     return a;
// };

// console.log(removeKeyB({ a: 1, b: 7, c: 3 }));
// console.log(removeKeyB({ b: 0, a: 7, d: 8 }));
// console.log(removeKeyB({ e: 6, f: 4, b: 5, a: 3 }));

// 55.
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
// const changeMergeTwoObjects = (a:Object, b:Object):Object => {
//     b['d'] = b['b'];
//     delete b['b']
//     const result = {...a, ...b};
//     return result;
// };

// console.log(changeMergeTwoObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// console.log(changeMergeTwoObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// 56.
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
// const multiplyValuesOfAByB = (a:Object, b:number) => {
//     for (const key in a) {
//         if (typeof a[key] === 'number') {
//             a[key] *= b;
//         }
//     } return a;
// };

// console.log(multiplyValuesOfAByB({ a: 1, b: 2, c: 3 }, 3));
// console.log(multiplyValuesOfAByB({ j: 9, i: 2, x: 3, z: 4 }, 10));
// console.log(multiplyValuesOfAByB({ w: 15, x: 22, y: 13 }, 6));

// 57.
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// const swapKeyValues = (a: Object): Object => {
//   return Object.fromEntries(Object.entries(a).map(a => a.reverse()))
// };

// console.log(swapKeyValues({ z: 'a', y: 'b', x: 'c', w: 'd' }));
// console.log(swapKeyValues({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' }));
// console.log(swapKeyValues({ a: 1, z: 24 }));

// 58.
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// const removeEmptyStrings = (a: {
//     [key: string]: any
//   }): { [key: string]: string | number } => {
//     return Object.fromEntries(
//       Object.entries(a).map(([key, value]) => {
//         if (value.trim() === "") {
//           return [key, null]
//         } else {
//           return [key, value]
//         }
//       })
//     )
//   };

// console.log(removeEmptyStrings({ a: 'a', b: 'b', c: '' }));
// console.log(removeEmptyStrings({ a: '', b: 'b', c: ' ', d: 'd' }));
// console.log(removeEmptyStrings({ a: 'a', b: 'b ', c: ' ', d: '' }));

// 59.
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
// const correctPersonalInfo = (a: {
//     [key: string]: any
//   }): { [key: string]: string } => {
//     let newObject = Object.fromEntries(
//       Object.entries(a).filter(
//         ([key]) =>
//           key === "fn" || key === "ln" || key === "size" || key === "weight"
//       )
//     )
//     if (newObject.size) {
//       newObject.size = newObject.size.toString()
//       newObject.size = newObject.size + "cm"
//     }
//     if (newObject.weight) {
//       newObject.weight = newObject.weight.toString()
//       newObject.weight = newObject.weight + "kg"
//     }
//     return newObject
//   }

// console.log(correctPersonalInfo({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 }));
// console.log(correctPersonalInfo({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 }));
// console.log(correctPersonalInfo({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }));
// console.log(correctPersonalInfo({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' }));

// 60.
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// const addContinentToObject = (a:Object[], b:string):Object[] => {
//   return a.map((obj) => {
//     return { ...obj, continent: b }
//   })
// };

// console.log(addContinentToObject([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
// console.log(addContinentToObject([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

// 61.
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// const convertToObject = (a: any[]): { [key: number]: number } => a.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(convertToObject([1, 2, 2, 3]));
// console.log(convertToObject([9, 9, 9, 99]));
// console.log(convertToObject([4, 3, 2, 1]));

// 62.
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// const areDatesEqual = (d1: Date, d2: Date): boolean => d1.getTime() === d2.getTime();

// console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
// console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
// console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// 63.
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// const daysBetween = (a: Date, b: Date): number => Math.abs(a.getTime() - b.getTime()) / (1000 * 3600 * 24);

// console.log(daysBetween(new Date('2020-06-11'), new Date('2020-06-01')));
// console.log(daysBetween(new Date('2000-01-01'), new Date('2020-06-01')));

// 64.
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// const isSameDAy = (d1: Date, d2: Date): boolean => d1.getDay() === d2.getDay();

// console.log(isSameDAy(new Date('2000/01/01'), new Date('2000/01/01')));
// console.log(isSameDAy(new Date('2000/01/01'), new Date('2000/01/02')));
// console.log(isSameDAy(new Date('2001/01/01'), new Date('2000/01/01')));
// console.log(isSameDAy(new Date('2000/11/01'), new Date('2000/01/01')));
