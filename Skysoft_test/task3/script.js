function isTriangle(a, b, c) {
    if ( a + b <= c || a + c <= b || b + c <= a ) {
        return 'not triangle'
    } else {
        return 'triangle'
    }
}

console.log(isTriangle(1, 1, 1));
