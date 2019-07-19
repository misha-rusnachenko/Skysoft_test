function f(x, y, z) {
    return ( 1 / (z * Math.sqrt(2 * Math.PI)) ) * Math.exp( - Math.pow((x - y), 2) / (2 * Math.pow(z, 2)))
}

console.log(f(1, 1, 0.25));
