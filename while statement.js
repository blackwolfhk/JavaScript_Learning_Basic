// Use while statement to create below * style:

// *
// **
// ***
// ****
// *****


// Method 1:
let star = '*'
x = 0
while(x < 5) {                     //while (condition)
    console.log(star)              //statement
    star = star + '*'
    x = x + 1
}


// Method 2: (Loop into Loop!)
x = 0
while (x < 5) {
    let star = '*'
    
    let y = 0
    while (y < x) {
        star = star + '*'
        y = y + 1
    }
    console.log(star)
    x = x + 1
}




// Use while statement to create below * style:
//  *********
//   *******
//    *****
//     ***
//      *


let a = 0
while (a < 9) {
    let star = ' '
    
    let c = 0
    while (c < a) {
        star = star + ' '
        c = c + 1
    }

    let b = 9 - a 
    while (b > a) {
        star = star + '*'
        b = b - 1
    }

    console.log(star)
    a = a + 1
}


