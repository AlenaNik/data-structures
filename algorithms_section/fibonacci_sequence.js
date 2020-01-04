//loop approach
function   fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        seq.push(seq[i-2] + seq[i-1]);
    }
    return seq[n]
}
console.log(fibonacci(43));


// recursion solution
function   fibonacciReq(n) {
if (n < 2 ) {
    return n;
}
return fibonacciReq(n-1) + fibonacciReq(n-2)
}

console.log(fibonacciReq(7));
