function checkIsClosed(str) {
    const stack = [];
    const brackets = {
        '(': ')'
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i])
        } else {
            let last = stack.pop()

            if (str[i] !== brackets[last]) {
                return 'NO'
            }
        }
    }

    if (stack.length !== 0) {
        return 'NO'
    }

    return 'YES'
}

console.log(checkIsClosed('(()()())'));
