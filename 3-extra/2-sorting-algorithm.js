/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

// to check if the type of the input
const isNumber = (input) => {
  return typeof input === "number";
};

//this function work same as splice() method to remove the element from an array.
const rmvArrayElement = (arr, elem) => {
  const result = [];
  let isFirstOccurrenceAdded = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== elem || isFirstOccurrenceAdded) {
      result.push(arr[i]);
    } else isFirstOccurrenceAdded = true;
  }
  return result;
};
const sortArray = (arr) => {
  const sortedArray = [];
  let min = 0;

  /* sorting algorithm I have used: get the value of index 0 and compare
  it with the rest of the array elements if */
  for (let i = 0; i <= arr.length; i++) {
    i = 0;
    min = arr[i];
    for (let j = 1; j <= arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    // push the result to the new array and remove it from unsorted array
    sortedArray.push(min);
    //arr.splice(arr.indexOf(min), 1);
    arr = rmvArrayElement(arr, min);
  }
  return sortedArray;
};

function sortAges(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      result.push(arr[i]);
    }
  }
  return sortArray(result);
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
