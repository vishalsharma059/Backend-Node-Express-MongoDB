class Solution{
    reverseArray(arr) {
        for (let i = 0, j = arr.length - 1; i < j; i++, j--){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;        
    }
}
let arr1 = [4, 5, 7, 1, 4, 8, 9];
let s1 = new Solution();
console.log(s1.reverseArray(arr1));