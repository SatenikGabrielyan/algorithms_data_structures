//Time Complexity: O(n)
//Space Complexity: O(1)
function findMissingNumber(arr) {
    if(!Array.isArray(arr)) {
        throw Error("Input must be an array")
    }
    for (let num of arr) {
        if (num < 0 || num > arr.length) {
            throw new Error(`Number ${num} is out of valid range [0, ${arr.length}]`)
        }
    }
    const uniqueSet = new Set(arr)
    if (uniqueSet.size !== arr.length) {
        throw new Error("All numbers must be unique")
    }
    let missingNum = arr.length
    for (let i = 0; i < arr.length; ++i) {
        missingNum += i - arr[i]
    }
    return missingNum
}


//Time Complexity: O(n)
//Space Complexity: O(n)
function findMissingNumberUsingSet(arr) {
    if(!Array.isArray(arr)) {
        throw Error("Input  must be an array")
    }
    for (let num of arr) {
        if (num < 0 || num > arr.length) {
            throw new Error(`Number ${num} is out of valid range [0, ${arr.length}]`)
        }
    }
    const uniqueSet = new Set(arr)
    if (uniqueSet.size !== arr.length) {
        throw new Error("All numbers must be unique")
    }
    const set = new Set(arr);
    for (let i = 0; i <= arr.length; i++) {
       if (!set.has(i)) {
           return i;
       }
   }
}



