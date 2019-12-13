const outputNumbers = number => {
    for (let i = 1; i <= number; i++) {
        i == 3 ? console.log('tree') :
        i == 5 ? console.log('five') : 
        ( i % 3 == 0 && i % 5 == 0 ) ? console.log('treefive') :
        console.log(i)
    }
}

outputNumbers(6)