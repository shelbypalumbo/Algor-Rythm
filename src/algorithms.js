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
    id: 2,
    title: "Number Countdown",
    subtitle: "Reverse the order of a given array of numbers",
    algorithm: `
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const countDown = nums => {
  let reversed = nums.reverse();
  for (var i = 0; i <= reversed.length - 1; i++) {
    console.log("nums", reversed[i]);
  }
};

countDown(nums);
`,
    testcase: `
`
  }
];
