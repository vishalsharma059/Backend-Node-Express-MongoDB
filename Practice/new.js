function factorial(n) {
    
    if (n == 1) {
        return 1;
    }
    while (n > 1)
    {
        return n * factorial(n - 1);
    }
}

let f = factorial(5);
console.log(f);

function fibonacci(n) {
    if (n < 0) return [];

    if (n == 1) return [0];

    let series = [0, 1];

    for (let i = 2; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

console.log(fibonacci(5));

function fibonacci(n) {
    

    let series = [];
    let a = 0, b = 1;
    let i = 0;

    // for (let i = 2; i <= n; i++) {
    //     series.push(series[i - 1] + series[i - 2]);
    // }
    // return series;

    while (i < n) {
        series.push(a);
        let nextElement = a + b;
        a = b;
        b = nextElement;
        i++;
    }
    return series;
}

console.log(fibonacci(5));

function rotation(n) {
    let arr = [1, 2, 3, 4, 5];

    let i = n % arr.length;

    arr.shift(i);
    console.log(arr);
    
}

rotation(3);

