const showFibSentenceRecursion = (number) => {
    const hash = {
        1: 1,
        2: 1
    };

    const fibRecursion = (n) => {
        if (!!hash[n]) {
            return hash[n];
        } 
    
        hash[n] = fibRecursion(n - 1) + fibRecursion(n - 2);
    
        return hash[n];
    }
    fibRecursion(number);

    return Object.values(hash).join(', ');
};


function fibCycle(n) {
    const fib = [1, 1];
    for( let i = fib.length; i < n; i++ ) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    console.log(fib);
}

console.log(showFibSentenceRecursion(8))
fibCycle(8)
