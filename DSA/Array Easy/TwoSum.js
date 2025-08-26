function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];

}


nums = [1, 9, 3, 7], target = 8
    
console.log(twoSum(nums, target));


// [7, -1, 5, 1];


nums1 = [5, 4, 3, 2, 1]

arr = nums1.map(element => element + 2)

nums1.forEach((element, index) => {
    nums1[index] = element + 2
});

console.log(nums1);
console.log(arr);

