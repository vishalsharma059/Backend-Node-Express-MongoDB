function missingNumber(nums) {
  let n = nums.length;

  let totalSum = (n * (n + 1)) / 2;
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }

  return totalSum - sum;
}

let nums = [3, 0, 1]
console.log(missingNumber(nums));
