/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, return triple their sum.
*/
/* function sumTotal(a, b) {
  return a === b ? (a + b) * 3 : a + b;
} */

let sumTotal = (a, b) => (a === b ? (a + b) * 3 : a + b);

console.log(sumTotal(10, 10));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const isFifty = (num1, num2) =>
  num1 === 50 || num2 === 50 || num1 + num2 === 50;

console.log(isFifty(50, 50));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (pos, str) => str.slice(0, pos) + str.slice(pos + 1);
console.log(removeChar(3, "Anindo"));

// console.log(remove_character("me", 1))
/*

4)
 Create a function to find the largest of three given integers.
*/
//Long way around
/* function findLargestInt(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
} */

//Smooth way around using .sort() method

const findLargestInt = /* function accepts an array of arguments*/ (...args) =>
  args.sort(
    (a, b) => /*this sorts a numerical array into ascending order >>*/ a - b
  )[
    args.length - 1
  ]; /* finally we access the last element in the arr as it will be the largest num */

console.log(findLargestInt(12, 9, 15));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function in_range(a, b) {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

/* const checkRange = (a, b) =>
  (a >= 40 && a <= 60) ||
  (a >= 70 && a <= 100) ||
  (b >= 40 && b <= 60) ||
  (b >= 70 && b <= 100); */

console.log(in_range(45, 106));
console.log(in_range(45, 55));

/*
6) 
Create a function to create a new string of specified copies of a given string.
*/
const copyString = (str, copies) => {
  return copies > 0 ? str.repeat(copies) : "";
};

console.log(copyString("Wako", 9));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName = (str) => str.startsWith("Los") || str.startsWith("New"); // => only works like this if the function is fruitfull. Because then the return keyword is not needed

console.log(cityName("Los Angeles"));
console.log(cityName("Dubai"));
console.log(cityName("New York"));
/*

8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

// .reduce() method takes an array and reduces its contents into a single value
// it accepts 4 parameters Acc, curr, current index and source array. In this case we specified the index at which we wanted to process to begin
const totalSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(totalSum([100, 65, 80]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const includesNum = (arr) => arr.includes(1) || arr.includes(3);

console.log(includesNum([1, 4]));
console.log(includesNum([5, 4]));

/* 10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */

const does_not_include = (arr) => !includesNum(arr); //takes array from Q9 and cleverly changes it's purpose with "not"
// console.log(does_not_include([1, 3]))
// console.log(does_not_include([9, 5]))

/* 11)

Create a function to find the longest string from a given array of strings.
 */
// function longest_string(arr) {
//   let max_str = arr[0].length;
//   let ans = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     const maxi = arr[i].length;
//     if (maxi > max_str) {
//       ans = arr[i];
//       max_str = maxi;
//     }
//   }
//   return ans;
// }

// console.log(longest_string(['Timmy', 'Turner', 'Wishing', 'For', 'a', 'Burner']))

const findLongestStr = (arr) =>
  arr
    .map((str) => ({ length: str.length, str }))
    .sort((a, b) => a.length - b.length)[arr.length - 1].str;

findLongestStr(["Timmy", "Turner", "Wishing", "For", "a", "Burner"]);

//takes arr passed as argument and a couple methods are applied to it in a chain (map and sort)
// .map() creates a new array populated with the results of calling a provided function on every element in the calling array
// .sort() sorts the elements of an array in place and returns the sorted array. The default sort order is ascending

/* 12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
 */

const typeOfAngle = (angle) => {
  switch (angle) {
    case "acute":
      angle < 90 ? "Acute" : "Not Acute";
      break;
    case "right":
      angle === 90 ? "Right" : "Not Right";
      break;
    case "obtuse":
      angle < 180 ? "Obtuse" : "Not Obtuse";
      break;
    default:
      angle = "Straight";
  }
  return angle;
};

console.log(typeOfAngle(90));

/* 13)

Create a function to find the index of the greatest element of a given array of integers */
const findGreatest = (arr) => {
  const temp = [...arr];
  const sorted = temp.sort((a, b) => a - b);
  return arr.indexOf(sorted[arr.length - 1]);
};
// temp variable stores arr of any length while sorted stores the result of sorting the array into ascending order
// finally we return the index of the biggest integer by calling indexOf() on the last element of the sorted array

/* 14)

Create a function to get the largest even number from an array of integers. */

const largestEvenNumber = (arr) => {
  const evenNums = arr.filter((n) => n % 2 === 0);
  return evenNums.sort((a, b) => a - b)[evenNums.length - 1];
};

largestEvenNumber([2, 24, 567, 680, 120]);

/* 16)

Create a function to check from two given integers, whether one is positive and another one is negative. */

const posAndNeg = (a, b) => (a < 0 && b > 0) || (a > 0 && b < 0);

/* 17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.  */

const newString = (str) =>
  str.lenth < 3
    ? str.toUppercase()
    : str.slice(0, 3).tolowerCase() + str.slice(3).toUppercase();

// check to see if length of str is < if so convert first 3 characters to uppercase with slice method. If they are more than 3 characters in str convert the first 3 to lowercase and concatenate the other half of the string, while converting it to uppercase

/* 18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */

const sumRange = (a, b) => (a + b > 50 && a + b < 80 ? 65 : 80);

//This one was simple. If a function is frutiful we don't necessarily need the function body to go in brackets

/* 19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */

const numToString = (num) => {
  let str = "";
  // create empty variable to store final string
  if (num % 3 === 0) str += "Diego";
  if (num % 5 === 0) str += "Riccardo";
  if (num % 7 === 0) str += "Stefano";
  // use modulo operator to check if number is divisible by x
  return str;
  //finallly as always return result of function otherwise console logging will return undefined
};

console.log(numToString(54))

/* 20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC */

const phraseToAcronym = (str) =>
  str
    .split(" ")
    //create array of strings by separating each word with a space
    .map((word) => word.charAt(0).toUppercase())
    //convert first letter of each word in array to uppercase and return a new array of uppercase letters
    .join("");
// join array into a new single string

// ----------------------------------------------------------------------------------------------------------------------------------

// ADVANCED HW

/* 1. Given a string (as a parameter), return the character that is most commonly used. */

const commonChar = (str) => {
  let charMap = {};

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
};

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */

/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/

/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */

/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 */

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/

/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" â‡’ "olleh" */

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/

/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/

/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/
