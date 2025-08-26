function MovesNegativeToEnd(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
}

nums = [-1, 1, -10, 3, 12];

let newArr = MovesNegativeToEnd(nums);
console.log(newArr);
