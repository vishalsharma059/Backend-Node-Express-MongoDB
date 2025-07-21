// alert("hii");

// Fundamental JavaScript Concepts
// arrays and object
// functions return
// async js coding

var arr = [1, 2, 3, 4, 5];

arr.forEach((val) =>{ 
    console.log("hello" + val);
})

arr.map((val) => {
    console.log(val + 12);
})

var ans = arr.filter((val) => {
    return val > 2;
})

console.log(ans);

var ans1 = arr.find((val) => {
    return val == 2;
})

console.log(ans1);

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
Object.freeze(obj); // Prevents modification of the object

obj.age = 31; // This will not change the age property

function greet(a, b, c) {
    console.log("Hello, World!");
}

// number of arguments passed to the function are length of function
console.log(greet.length); // Output: 3

function abcd() {
    return 12;
}

// if we move line by line then it will called synchronous
// jo bhi code async nature ka ho use side Stack me bhej do aur agle code ko run karo jo bhi sync nature ka ho and jab bhi sync code khatam ho jaye to, check kro ki async code complete hua ya nhi and agr wo complete hua ho to use main stack me lao and run kro


async function fetchData() {
    let res = await fetch(`https://randomuser.me/api/`) 
    let ans = await res.json();

    console.log(ans.results);
    
}

fetchData();
