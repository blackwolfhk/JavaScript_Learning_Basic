aboutMe = {
    name: "Kelvin",
    hobby: ["coding", "Piano", "Badminton", "Singing"],
    favoriteSubject: ["Finance", "Computer Science", "Math"],
    birthday: {"month": "January", "day": 1}
}


// Concept:  Object -> key -> value -> list -> index
console.log(aboutMe.favoriteSubject[0]) // [ 'coding', 'Piano', 'Badminton', 'Singing' ]
console.log(aboutMe.hobby)  // method 1
console.log(aboutMe["hobby"]) // method 2


// Step1 -> assign Object
// Try to make an output to "Kelvin birthday is 1 January."

// Method 1
console.log(aboutMe.name + " birthday is " + aboutMe.birthday.day + " " + aboutMe.birthday.month + ".")
// Output: Kelvin birthday is 1 January.


// Method 2
console.log(`${aboutMe.name} birthday is ${aboutMe.birthday.day} ${aboutMe.birthday.month}.`)
// Output: Kelvin birthday is 1 January.


// Method 3
// ${} <- string formatting
let myBirthday = function(obj) {
console.log(`${obj.name} birthday is ${obj.birthday.day} ${obj.birthday.month}.`)
}
myBirthday(aboutMe)
// Output: Kelvin birthday is 1 January.
