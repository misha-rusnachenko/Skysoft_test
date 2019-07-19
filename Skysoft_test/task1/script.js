function palindrom(str) {
    str = str.toString()
    return str === str.split('').reverse().join('') ? 'Yes' : 'No'
}
console.log(palindrom('test is a si tset'));
console.log(palindrom('test'));
console.log(palindrom(108011));
