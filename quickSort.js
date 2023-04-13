//quick sort :- in place

function QuickSort(arr, s, e) {
  if (s >= e) return;
  let p = partition(arr, s, e);
  QuickSort(arr, s, p - 1);
  QuickSort(arr, p + 1, e);
}

function partition(arr, s, e) {
  let pivot = arr[e];
  let i = s - 1;
  for (let j = s; j <= e - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, j, i);
    }
  }
  swap(arr, i + 1, e);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [9, 3, 7, 6, 8, 1, 2, 4, 5];
let s = 0;
let e = arr.length - 1;

QuickSort(arr, s, e);
console.log(arr);

//RANDOMISED QUICK SORT

function QuickSort(arr, s, e) {
  if (s >= e) return;
  let p = randomizedPartition(arr, s, e);
  QuickSort(arr, s, p - 1);
  QuickSort(arr, p + 1, e);
}

function randomizedPartition(arr, s, e) {
  // Randomly choose a pivot index between s and e
  let randomIndex = Math.floor(Math.random() * (e - s + 1)) + s;
  swap(arr, randomIndex, e);
  return partition(arr, s, e);
}

function partition(arr, s, e) {
  let pivot = arr[e];
  let i = s - 1;
  for (let j = s; j <= e - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, j, i);
    }
  }
  swap(arr, i + 1, e);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr2 = [9, 3, 7, 6, 8, 1, 2, 4, 5, 18];
let s2 = 0;
let e2 = arr.length - 1;

QuickSort(arr2, s2, e2);
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//quick sort with more space :-
// function Quicksort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//   let pivot_element = array[array.length - 1];
//   let left_sub_array = [];
//   let right_sub_array = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] < pivot_element) {
//       left_sub_array.push(array[i]);
//     } else {
//       right_sub_array.push(array[i]);
//     }
//   }
//   return [
//     ...Quicksort(left_sub_array),
//     pivot_element,
//     ...Quicksort(right_sub_array),
//   ];
// }

// console.log(Quicksort(arr));
