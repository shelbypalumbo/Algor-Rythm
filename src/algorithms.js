export default [
  {
    id: 0,
    title: "Basic Arithmetic",
    subtitle: "Add, Subtract, Multiply, and Divide two numbers",
    algorithm: `
let result;

const add = (num1, num2) => {
  return (result = num1 + num2);
};

const subtract = (num1, num2) =>{
  return (result = num1 - num2);
};

const multiply = (num1, num2) => {
  return (result = num1 * num2);
};

const divide = (num1, num2) => {
  return (result = num1 / num2);
};`,
    testcase: `
If you pass, num1 = 3 and num2 = 6 as arguments to each fuction, you will get:

      add(3,6), result = 9;
      subtract(3,6), result = -3;
      multiply(3,6), result = 18;
      divide(3,6), result = 0.5

        This is basic arithmetic. You are simply returning the value of 'result', 
      which is the artithmetic equation. 
        `
  },
  {
    id: 1,
    title: "Vowel Count",
    subtitle: "Find the number of vowels in a string",
    algorithm: `
const vowelCount = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};
`,
    testcase: `
Check each characters of the input string 'str' against the items in the vowel array (the vowels). If the str character at index [i] does occur in the array, add +1 to the result, otherwise do nothing and return result.

If str="Mina", the for loop would iterate 4 times! Each iteration, setting the next character of the string to lowercase using the toLowerCase() method. If the character of the iteration matches any of the items in the vowel array, +1 to the result! 

In this case, "Mina" has 2 vowels, so the value of result = 2.
`
  },
  {
    id: 2,
    title: "Print Out Only Even Numbers",
    subtitle: "Log the even numbers from a given array of numbers.",
    algorithm: `
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const logEvenNums = numbers => {
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      let even = numbers[i];
      console.log(even, "Even Numbers!!!");
    }
  }
};

logEvenNums(numbers);
`,
    testcase: `In this function you are console logging only the value of the even number in the given array.
    
    This is done by iterating over an if statement that checks IF this array item has a remainder of 0, then log the number. 
    
    The amount of for loop iterations are the length of the given numbers array and numbers[i] will be the value of each array item during each iteration.

    The console will log 0,2,4,6,8,10,12,14,16,18
`
  },
  {
    id: 3,
    title: "Number Countdown",
    subtitle:
      "Reverse the order of an array of numbers and return each array item",
    algorithm: `
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const countDown = nums => {
  let reversed = nums.reverse();
  for (var i = 0; i <= reversed.length - 1; i++) {
    console.log(reversed[i]);
  }
};

countDown(nums);
`,
    testcase: `This is not a sorting algorithm, that will come later. 
    This function is just reversing the order of the given array of numbers using the reverse() method and printing each item of the array to the console.
    
    The expected result should be 
    " 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 ".
`
  },
  {
    id: 4,
    title: "String Reversal",
    subtitle: "Reverse the order of a string",
    algorithm: `
const reverseStr = (str) => {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseStr("Shelby Palumbo"))
`,
    testcase: ` Using the split(" ") method with a space in quotes, 
    splits the string at the space character. 
    The reverse() method then reverses the order of both items in the string, 
    and then they are rejoined by using the join(" ") method.

    The expected result is  "Palumbo Shelby"
    `
  },
  {
    id: 5,
    title: "Sum of an Array",
    subtitle: "The sum of all numbers in an array.",
    algorithm: `
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result;

const arrSum = numbers => {
  result = numbers.reduce((a, b) => a + b);
  return result;
};

arrSum(numbers);
console.log(result);
`,
    testcase: ` 
Using the reduce() method on the numbers array, 
the reduce method executes a function for each value of the array, in this case, the function adds a + b,
and stores the value of this result. 

The expected result of the sum of the numbers array is 55.

  a + b = result
 1 + 2 = 3 
3 + 3 = 6
 6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
21 + 7 = 28
28 + 8 = 36
36 + 9 = 45
 45 + 10 = 55
    `
  },
  {
    id: 6,
    title: "Divisible Numbers",
    subtitle:
      "Find the numbers in a given array that are divisible by 3 and 5.",
    algorithm: `
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    
    const findDivisibleNums = () => {
      for (var i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
          console.log(array[i], "is divisible by 3.");
        }
        if (array[i] % 5 === 0) {
          console.log(array[i], "is divisible by 5.");
        }
        if (array[i] % 15 === 0) {
          console.log(array[i], "is divisible by 3 & 5.");
        }
        if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
          console.log(array[i], "is NOT divisible by 3 or 5.");
        }
      }
    };
    
    findDivisibleNums(array);
  `,
    testcase: `
    `
  },
  {
    id: 7,
    title: "Max Array Value",
    subtitle: "Using Math.max",
    algorithm: `
let array = [3, 1, 17, 23, 5, 6, 111, 1000, 12, 0, -1];

let result;
const maxNum = () => {
result = Math.max(...array);
return result;
};

maxNum(array);
console.log(result);
`,
    testcase: `
  `
  },
  {
    id: 8,
    title: "Min Array Value",
    subtitle: "",
    algorithm: `
let array = [3, 1, 17, 23, 5, 6, 111, 1000, 12, 0, -1];

let result;
const minNum = () => {
result = Math.min(...array);
return result;
};

minNum(array);
console.log(result);
`,
    testcase: `
  `
  }
];

// {
//   id: ,
//   title: "",
//   subtitle: "",
//   algorithm: `
// `,
//   testcase: `
//   `
// }
