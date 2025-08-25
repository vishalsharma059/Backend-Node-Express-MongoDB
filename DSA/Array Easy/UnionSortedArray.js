class Solution {
  // This is two pointer apprach for union of two sorted array
  findUnion(a, b) {
    let i = 0,
      j = 0;
    let arr = [];

    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        // push only if not duplicate
        if (arr.length === 0 || arr[arr.length - 1] !== a[i]) {
          arr.push(a[i]);
        }
        i++;
      } else if (a[i] === b[j]) {
        if (arr.length === 0 || arr[arr.length - 1] !== a[i]) {
          arr.push(a[i]);
        }
        i++;
        j++;
      } else {
        if (arr.length === 0 || arr[arr.length - 1] !== b[j]) {
          arr.push(b[j]);
        }
        j++;
      }
    }

    // remaining elements in a
    while (i < a.length) {
      if (arr.length === 0 || arr[arr.length - 1] !== a[i]) {
        arr.push(a[i]);
      }
      i++;
    }

    // remaining elements in b
    while (j < b.length) {
      if (arr.length === 0 || arr[arr.length - 1] !== b[j]) {
        arr.push(b[j]);
      }
      j++;
    }

    return arr;
  }

  usingSet(a, b) {

    let unionSet = new Set([...a, ...b]);

    return Array.from(unionSet).sort((x, y) => x - y);
  }
}

let s1 = new Solution();
let arr1 = [1, 2, 3, 4, 4, 4, 50];
let arr2 = [2, 2, 2, 30, 40];

console.log(s1.findUnion(arr1, arr2));

let s2 = new Solution();
console.log(s2.usingSet(arr1, arr2));
