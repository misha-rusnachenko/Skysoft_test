function indexOfObject(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (typeof element === 'object') {
      if (isObjectsEqual(element, target)) {
        return i;
      }
    }
  }

  return -1
}

function indexOfArray(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (Array.isArray(element)) {
      if (isArraysEqual(element, target)) {
        return i;
      }
    }
  }

  return -1
}

function isArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      let index = -1;
      if (typeof element === 'object') {
        index = indexOfObject(arr2, element)
      } else if (Array.isArray(element)) {
        index = indexOfArray(arr2, element)
      } else {
        index = arr2.indexOf(element)
      }
      if (index === -1) {
        return false
      }
    }
  
    return true;
};


function isObjectsEqual(obj1, obj2) {
    const firstKeys = Object.keys(obj1);
    const secondKeys = Object.keys(obj2);
  
    if (!isArraysEqual(firstKeys, secondKeys)) {
      return false;
    }
  
    for (let i = 0; i < firstKeys.length; i++) {
      const key = firstKeys[i];
      const first = obj1[key];
      const second = obj2[key];
  
      if (Array.isArray(first) && Array.isArray(second)) {
        if (!isArraysEqual(first, second)) {
          return false;
          }
        } else if (typeof first === "object" && typeof second === "object") {
          if (!isObjectsEqual(first, second)) {
            return false;
          }
        } else if (first !== second) {
          return false;
        }
    }
  
    return true;
};


console.log(isObjectsEqual({a: 1, b: 3, c: 1}, {a: 1, b: 2, c: {a: 1}}));




