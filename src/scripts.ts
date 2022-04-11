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

// const sum = (a:number, b:number):number => {
//     return a + b;
// };
// console.log(sum(1, 99));

// const valueType = (value: any) => {
//     return typeof value;
// };
//
// console.log(valueType(['array']));

// const equal = (a:any, b:any):boolean => {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
//
// };
// console.log(equal('3', '3'));

// const nthChar = (a:string, n:number):string => {
//     return a.charAt(n - 1);
// };
//
// console.log(nthChar('gfedcba', 3));

// const removeFirstThreeChars = (a:string):string => {
//     return a.substr(3);
// };
//
// console.log(removeFirstThreeChars('fgedcba'));

// const lastThreeChars = (a:string):string => {
//     return a.substr(a.length - 3);
// };
//
// console.log(lastThreeChars('fgedcba'));

// const firstThreeChars = (a:string):string => {
//     return a.substr(0, 3);
// };
//
// console.log(firstThreeChars('fgedcba'));

// const firstHalf = (a:string):string => {
//     return  a.substr(0, a.length / 2);
// };
//
// console.log(firstHalf('gedcba'));

// const removeLastThreeChars = (a:string):string => {
//     return a.substr(0, a.length - 3);
// };
//
// console.log(removeLastThreeChars('fgedcba'));

// const bPercentOfA = (a:number, b:number):number => {
//     return a / 100 * b;
// };
//
// console.log(bPercentOfA(500, 25));

// const sixValuesMath = (a:number, b:number, c:number, d:number, e:number, f:number):number => {
//     return Math.pow(((a + b - c) * d / e), f);
// }
//
// console.log(sixValuesMath(2,3,6,4,2,3));

// const oddOrEven = (a:number):boolean => (a % 2 === 0);
//
//
// console.log(oddOrEven(10));

// const charCount = (a:string, b:string):number => {
//
//   const aArr = b.split('').filter((char) => char === a);
//   return aArr.length;
// };
//
// console.log(charCount('z', 'how many times does the character occur in this sentence?'));

// const isInteger = (a:number):boolean => Number.isInteger(a);
//
// console.log(isInteger(1048));

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

// const roundToSecondDigit = (a:number):number => a.toFixed(2);
//
// console.log(roundToSecondDigit(26.1379));

// const splitNumber = (a:number):Array => a.toString().split('');
//
// console.log(splitNumber(193278));

// const clearStrings = (a:string, b:string):string => {
//     const cleanA = a.replace(/[^a-zA-Z ]/g, "");
//     const upperCaseFirstChar = cleanA.charAt(0).toUpperCase();
//     const correctA = cleanA.replace(cleanA.charAt(0), upperCaseFirstChar);
//     const correctB = b.replace(/[^a-zA-Z ]/g, "").split('').reverse().join('');
//     return correctA.concat(correctB);
// };
//
// console.log(clearStrings('down', 'nw%ot'));

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

// const primeNumber = (a: number): number => {
//     for (let i = 2; i < a; i++) {
//       if (a % i === 0) {
//         return primeNumber(a + 1)
//       }
//     }
//     return a
//   };

//   console.log(primeNumber(2000));

// const numberDevisible = (x:number, y:number):number => {
//     while (x % y !== 0) {
//         x ++;
//     }
//     return x;
// };

// console.log(numberDevisible(-5, 7));

// const insertString = (a:string, b:string):string => {

//     const strArr = a.split('');
//     for (let i = strArr.length - 3; i >= 0; i -= 3) {
//         strArr.splice(i, 0, b);
//     }
//     return strArr.join('');
// };

// console.log(insertString('zxyzxyzxyzxyzxyz', 'w'));

// const nextToCharacter = (a: string): string => {
//     let newString = ""
//     for (let i = 0; i < a.length; i++) {
//       newString += String.fromCharCode(a.charCodeAt(i) + 1)
//       }
    
//     return newString
//   };

// console.log(nextToCharacter('bnchmf'));

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

// const nthElement = (a:Array, b:number):number => a[b-1];
   
// console.log(nthElement([7,2,1,6,3],1));

// const removeFirstThree = (a:Array):Array => a.splice(3, 3)

// console.log(removeFirstThree([5,4,3,2,1,0]));

// const lastThreeElements = (a:Array):Array => a.splice(a.length - 3)

// console.log(lastThreeElements([99,1,1]));

// const firstThreeElements = (a:Array):Array => a.splice(0, 3)

// console.log(firstThreeElements([99,1,1]));

// const lastNElements = (a:Array, b:number):Array => a.splice(a.length - b, b);

// console.log(lastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

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

// const lengthOfAnArr = (a:Array):Array => a.length;

// console.log(lengthOfAnArr([4,3,2,1,0]));

// const negativeValues = (a:Array):number => {
//     let count = 0;
//     for (let i = 0; i < a.length; i ++){
//         if (a[i] < 0){
//             count ++;
//         }
//     }
//     return count;
// };

// console.log(negativeValues(([4,-3,2,1,0]));

const descendingOrder = (a:Array):Array => {
    a.sort(function(a, b) {
        return a - b;
      });
};

console.log(descendingOrder([1, 3, 2]));