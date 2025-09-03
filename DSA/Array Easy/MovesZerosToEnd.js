function MovesZerosToEnd(nums) {
    let j = 0;

    for (let i = j + 1; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
    return nums;
}

nums = [0, 1, 0, 3, 12]

let newArr = MovesZerosToEnd(nums);
console.log(newArr);

