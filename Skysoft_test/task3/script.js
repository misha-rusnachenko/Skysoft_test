const isAnagram = (str1, str2) => {
    let a = str1.split("").sort().join("")
    let b = str2.split("").sort().join("")
    console.log(a === b)
}

isAnagram('fin2der', 'friend2')