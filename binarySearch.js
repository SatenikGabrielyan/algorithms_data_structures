
//Time Complexity: O(log n)
//Space Complexity: O(log n) due to recursive call stack
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if(!Array.isArray(arr)) {
        throw Error("First parameter must be an array")
    }
    if(isNaN(target) || typeof target !== "number") {
        throw Error("Second parameter must be an integer number")
    }
    if(start > end) {
        return -1
    }
    let mid = Math.floor((start + end)/2)
    if(arr[mid] === target) {
        return mid
    }
    if(arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1)
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end)
    }
}

//Time Complexity: O(log n)
//Space Complexity: O(1)
function binarySearchIterative(arr, target) {
    if(!Array.isArray(arr)) {
        throw Error("First parameter must be an array")
    }
    if(isNaN(target) || typeof target !== "number") {
        throw Error("Second parameter must be an integer number")
    }
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (target < arr[mid]) {
            right = mid - 1
        } 
       
        else {
            left = mid + 1
        }
    }
  return -1
}

//Time Complexity: O(n)
// Space Complexity: O(1)
function linearSearch(arr, target) {
    if(!Array.isArray(arr)) {
        throw Error("First parameter must be an array")
    }
    if(isNaN(target) || typeof target !== "number") {
        throw Error("Second parameter must be an integer number")
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}


