/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sumTotal(a, b) {
   return a === b ? (a + b) * 3 : a + b
}
// console.log(sumTotal(10, 10))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function isFifty (n1, n2) {
    if (n1 === 50 || n2 === 50 || n1 + n2 == 50) {
        return true
    } else {
        return false
    }
}
// console.log (isFifty(10, 30))

/* Arrow Fx notation
const isFifty = (num1, num2) =>
  num1 === 50 || num2 === 50 || num1 + num2 === 50; */
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

/* const removeChar = (pos, str) => str.slice(0, pos) + str.slice(pos + 1); 
same thing but without the need for part1 and 2 variables */
 
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

const findLargestInt = /* function accepts an array of arguments*/ (...args) => args.sort((a, b) => /*this sorts a numerical array into ascending order >>*/ a - b)[args.length - 1]; /* finally we access the last element in the arr as it will be the largest num */

  // console.log(findLargestInt(12, 9, 15))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function in_range (a, b) {
    if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) 
        || 
        (a >= 70 && b <= 100 && b >= 70 && b <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }

  /* const checkRange = (a, b) =>
  (a >= 40 && a <= 60) ||
  (a >= 70 && a <= 100) ||
  (b >= 40 && b <= 60) ||
  (b >= 70 && b <= 100); */

  // console.log(in_range(45, 106))
  // console.log(in_range(45, 55))
  
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copy_string(str, copies) {
    if (copies > 0) { 
      return str.repeat(copies);
    }
    else {
      return "";
    }
    // copies > 0 ? str.repeat(copies) : "";
  }
  
  console.log(copy_string("Wako", 9))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function new_or_los (city) {
    if (city.startsWith("Los") || city.startsWith("New")){
        return city
    } else {
        return ""
    }
}

// const startsWith = (str) => str.startsWith("Los") || str.startsWith("New"); // => only works like this if the function is fruitfull. Because then the return keyword is not needed

// console.log(new_or_los("Los Angeles"))
// console.log(new_or_los("New York"))
// console.log(new_or_los("Dubai"))
/*

8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sum_of_three(arr) {
    return arr[0] + arr[1] + arr[2];
} 

// .reduce() method takes an array and reduces its contents into a single value
// it accepts 4 parameters Acc, curr, current index and source array. In this case we specified the index at which we wanted to process to begin 
// const totalSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum_of_three([100, 65, 80]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const includesNum = (arr) => arr.includes(1) || arr.includes(3);

// console.log(three_options_array([1, 4]))
// console.log(three_options_array([5, 4]))


/* 10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */
function no1sor3s(arr) {
    if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1){
        return "No 1s or 3s";
    } else {
        return "Access denied";
    }
}    
// console.log(no1sor3s([1, 3]))
// console.log(no1sor3s([9, 5]))

/* 11)

Create a function to find the longest string from a given array of strings.
 */
function longest_string(arr) {
    let max_str = arr[0].length;
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const maxi = arr[i].length;
        if (maxi > max_str) {
            ans = arr[i];
            max_str = maxi;
        }
    }
    return ans;
}

// console.log(longest_string(['Timmy', 'Turner', 'Wishing', 'For', 'a', 'Burner']))

/* const findLongest = words => Math.max(...(words.map(el => el.length))); */

/* 12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
 */
 
    function typeOfAngle (angle) {

        switch (angle) {
          case 'acute':
              angle < 90? "Acute": "Not Acute" 
            break;
          case 'right':
            angle === 90 ? "Right" : "Not Right";
            break;
          case 'obtuse':
            angle < 180 ? "Obtuse" : "Not Obtuse";
            break;
          default:
            angle = "Straight";
        }
    }

    // console.log(typeOfAngle(90))

    //DISPLAYING UNDEFINED...ASK LIDIA ABOUT THIS 
/* 13)

Create a function to find the index of the greatest element of a given array of integers */

/* 14)

Create a function to get the largest even number from an array of integers. */

/* 16)

Create a function to check from two given integers, whether one is positive and another one is negative. */

/* 17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.  */

/* 18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */


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

/* 20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC */

