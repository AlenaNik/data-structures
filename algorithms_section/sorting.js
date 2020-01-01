//loop

function  findFactorial(num) {
    let answer = 1;
    if (num === 2) {
        answer = 2;
    }
    for (let i = 2; i <= num; i++) {
        answer = answer * i;
    }
    return answer;
}

findFactorial(5);


function  findFactorialRecursive(num) {
    if (num === 2) {
        return 2;
    }
    return num * findFactorialRecursive(num - 1);
}

findFactorialRecursive(5)

