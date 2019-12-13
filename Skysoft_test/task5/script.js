const checkIsClosed = str => {
    const stack = [];
    const open = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    const closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return "NO";
        }
    }
    return stack.length === 0 ? "YES" : "NO"
}

console.log(checkIsClosed('{[()]}'));
