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
  }
];
