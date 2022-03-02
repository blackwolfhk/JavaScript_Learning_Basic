// Example 1

const maxNumber = 5; /*Max number is 5 */

for(let i=0; i<maxNumber; i++) {
    console.log(i)
}


// Example 2

const arr = ["Hello,","I","am","an","array"];

for (let i = 0; i<arr.length; i++) {
    const value = arr[i];
    console.log(value)
}


// Example 3
// 利用兩重for迴圈，去將兩個數列的數字的不同組合相加。

const array1 = [10,20,40,50,60,32];
const array2 = [10,30,40,50,60,21];

const sumArray = [];

for(let i = 0; i< array1.length ; i++){
     for(let j = 0; j< array2.length; j++){
           sumArray.push(array1[i]+ array2[j]);
     }
}
// output result:
// [
//    20,  40, 50,  60,  70, 31, 30,  50,  60,
//    70,  80, 41,  50,  70, 80, 90, 100,  61,
//    60,  80, 90, 100, 110, 71, 70,  90, 100,
//   110, 120, 81,  42,  62, 72, 82,  92,  53
// ]


// Example 4 
// For Loop in For Loop

const a = [1,2,3,4,5,6,7,8,9,10]; // Do not modify a 
const b = [2,4,6,8,10,12,14,16,18,20]; // Do not modify b

const squareArray = []; // Result push to this array

for(let i = 0; i < a.length ; i++) {
    for(let j = 0; j < b.length; j++) {
        squareArray.push(a[i] **2 + b[j] **2);
    }
}


// Example 5 
// For loop || For-in || For-of

const arr = [5,4,3,2,3,5,1,3,2];

for(let i = 0; i < arr.length ; i++){
     console.log(arr[i] + 10);
}

// Use "for-in loop" rewrite to the below:

const arr = [5,4,3,2,3,5,1,3,2];

for(let i in arr){
    console.log(arr[i] + 10);
}


// Use "for-of loop" rewrite to the below:
const arr = [5,4,3,2,3,5,1,3,2];

for(let num of arr){
    console.log(num + 10);
}


// Example 6

const countries = ["Japan","Korea","Singapore",
"Vietnam","United States","United Kingdom"];

/*for loop*/
for(let i = 0 ; i< countries.length ; i++){
     console.log(`${i}. ${countries[i]}`);
}

/*for-in loop*/
for(let i in countries){
     console.log(`${i}. ${countries[i]}`);
}

/*for-of loop*/
for(let country of countries){
    console.log(country);
}




