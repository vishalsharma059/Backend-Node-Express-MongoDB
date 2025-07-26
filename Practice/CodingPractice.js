const factorial = (n) => {
  if (n == 1) {
    return 1;
  }
  while (n > 1) {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

const fibonacii = (n) => {
  let a = 0,
    b = 1;

  if (n == 1) return 0;
  if (n >= 2) {
    console.log(a);
    console.log(b);
  }

  for (let i = 2; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
  }
};

fibonacii(10);

const rotate1 = (n) => {
  let arr = [1, 2, 3, 4, 5];
  let shift = n % arr.length;

  let rotated = arr.slice(shift).concat(arr.slice(0, shift));
  console.log(rotated);
};
rotate1(3);

const rotate2 = (n) => {
  let arr = [1, 2, 3, 4, 5];
  let shift = n % arr.length;

  for (let i = 0; i < shift; i++) {
    let temp = arr[0];
    for (let j = 0; j < arr.length; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = temp;
  }
};
rotate1(3);

let arr = [1, [2, [3, 4]], 5];

let flatArr = arr.flat(Infinity);

console.log(flatArr);

const flattenArray = (arr, result = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flattenArray(arr, []));
