function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function rotateRight(arr, k) {
  let n = arr.length;

  k = k % n;

  // Reverese the entire array
  reverse(arr, 0, n - 1);

  // Reverese the first k elements
  reverse(arr, 0, k - 1);

  // Reverse the remaining n-k element
  reverse(arr, k, n - 1);

  return arr;
}

function rotateLeft(arr, k) {
  let n = arr.length;

  k = k % n;

  // Reverese the first k elements
  reverse(arr, 0, k - 1);

  // Reverse the remaining n-k element
  reverse(arr, k, n - 1);

  // Reverese the entire array
  reverse(arr, 0, n - 1);

  return arr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

console.log(rotateRight(arr1, 3));
console.log(rotateLeft(arr2, 3));
