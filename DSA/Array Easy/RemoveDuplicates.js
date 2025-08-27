function removeDuplicates(nums) {
    let count = 0;

    for (let i = 1; i < nums.length; i++){
        if (nums[count] !== nums[i]) {
            nums[count] = nums[i - 1];
            count++;
        }
    }
    return count;
}

let arr = [1, 1, 1, 2, 3, 4, 4];

let k = removeDuplicates(arr);

console.log(arr.slice(0, k));
