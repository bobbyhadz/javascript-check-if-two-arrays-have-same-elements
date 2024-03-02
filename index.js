// EXAMPLE 1 - Check if Two Arrays have the Same Elements in JavaScript

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c'];

function areEqual(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }

      return false;
    });
  }

  return false;
}

console.log(areEqual(arr1, arr2)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if the two arrays have same elements regardless of order

// const arr1 = ['c', 'b', 'a'];
// const arr2 = ['a', 'b', 'c'];

// function areEqual(array1, array2) {
//   if (array1.length === array2.length) {
//     return array1.every(element => {
//       if (array2.includes(element)) {
//         return true;
//       }

//       return false;
//     });
//   }

//   return false;
// }

// console.log(areEqual(arr1, arr2)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if two arrays have the same elements using a `for` loop

// function areEqual(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let index = 0; index < array1.length; index++) {
//     if (array1[index] !== array2[index]) {
//       return false;
//     }
//   }

//   return true;
// }

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['a', 'b', 'c'];
// const arr3 = ['z', 'x', 'y'];

// console.log(areEqual(arr1, arr2)); // 👉️ true

// console.log(areEqual(arr1, arr3)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if two arrays have the same elements using `JSON.stringify()`

// function areEqual(array1, array2) {
//   return JSON.stringify(array1) === JSON.stringify(array2);
// }

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['a', 'b', 'c'];
// const arr3 = ['z', 'b', 'c'];

// console.log(areEqual(arr1, arr2)); // 👉️ true

// console.log(areEqual(arr3, arr2)); // 👉️ false
