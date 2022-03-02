// Example to check duplication

// Method 1


const checkDuplicate = {}
const chars = ["a", "b", "a", "c", "d", "e", "d"]
let x = 0
while (x < chars.length) {
    if (checkDuplicate[chars[x]] == true) {
        console.log(chars[x] + " is duplicated")
    }
    checkDuplicate[chars[x]] = true
    console.log(checkDuplicate)
    x++
}

// Output:
// { a: true }
// { a: true, b: true }
// a is duplicated
// { a: true, b: true }
// { a: true, b: true, c: true }
// { a: true, b: true, c: true, d: true }
// { a: true, b: true, c: true, d: true, e: true }
// d is duplicated
// { a: true, b: true, c: true, d: true, e: true }


// Method 2

const checkDuplicate = {}
const chars = ["a", "b", "a", "c", "d", "e", "d"]
let x = 0
while (x < chars.length) {
    if (checkDuplicate[chars[x]] == null) {  // <- use "== null" check undefined
        checkDuplicate[chars[x]] = 0
    }
    checkDuplicate[chars[x]] = checkDuplicate[chars[x]] + 1
    console.log(checkDuplicate)
    x = x + 1    
}

console.log(checkDuplicate)


// { a: 1 }
// { a: 1, b: 1 }
// { a: 2, b: 1 }
// { a: 2, b: 1, c: 1 }
// { a: 2, b: 1, c: 1, d: 1 }
// { a: 2, b: 1, c: 1, d: 1, e: 1 }
// { a: 2, b: 1, c: 1, d: 2, e: 1 }
// { a: 2, b: 1, c: 1, d: 2, e: 1 }
