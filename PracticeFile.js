function countCharacter(str) {
    const result = {};

    for (const char of str) {
        result[char] = (result[char] || 0) + 1;
    }
    return result;
}

let ans = countCharacter("aaaaabbbbccccddd");

console.log(ans);

[1, 2, 3, 4, 5, 6, 2].map((item) => {
    if (item == 5) {
        return
    } else {
        return item;
    }
})

// okh i want to make some changes