const checkVowel = word => {
    const arr = word.toLowerCase().split('')
    const letters = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }
    let total = 0;
    let output = ''
    
    for (let key in letters) {
        arr.forEach(element => {
            if (element === key) {
                letters[key]++;
            }
        })
        if (letters[key] > 0) {
            output += `${key}: ${letters[key]} `
        }
        total += letters[key]
    };

    console.log(`${output}total: ${total}`);
}

checkVowel('hello')