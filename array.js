const temperatures = [
        {"date": "1 Jan", "minTemperature": 11, "maxTemperature": 18},
        {"date": "2 Jan", "minTemperature": 10, "maxTemperature": 17},
        {"date": "3 Jan", "minTemperature": 12, "maxTemperature": 17},
        {"date": "4 Jan", "minTemperature": 14, "maxTemperature": 19},
        {"date": "5 Jan", "minTemperature": 16, "maxTemperature": 21},
        {"date": "6 Jan", "minTemperature": 17, "maxTemperature": 21},
        {"date": "7 Jan", "minTemperature": 18, "maxTemperature": 22},
]

// Q1 Use .sort() to get an array with the forecasts ordered by minimum temperature in descending order

temperatures.sort(function(tempA, tempB) {
    if (tempA.minTemperature > tempB.minTemperature) {
        return -1
    } else if (tempA.minTemperature < tempB.minTemperature) {
        return 1
    } else {
        return 0
    }
})
console.log(temperatures)

// Output result:
// [
//   { date: '7 Jan', minTemperature: 18, maxTemperature: 22 },
//   { date: '6 Jan', minTemperature: 17, maxTemperature: 21 },
//   { date: '5 Jan', minTemperature: 16, maxTemperature: 21 },
//   { date: '4 Jan', minTemperature: 14, maxTemperature: 19 },
//   { date: '3 Jan', minTemperature: 12, maxTemperature: 17 },
//   { date: '1 Jan', minTemperature: 11, maxTemperature: 18 },
//   { date: '2 Jan', minTemperature: 10, maxTemperature: 17 }
// ]


// Q2 Use .map() to get an array with dates only

const sortingTemperatures = temperatures.slice()

temperatures.sort(function(tempA, tempB) {
    return tempB.minTemperature - tempA.minTemperature;
})

console.log(sortingTemperatures)

console.log(temperatures.map(function (temp) {
    return temp.date;
}))


// Output result:
// [
//   '7 Jan', '6 Jan',
//   '5 Jan', '4 Jan',
//   '3 Jan', '1 Jan',
//   '2 Jan'
// ]


//  Q3 Use .filter() to get an array with all dates with forecast maximum temperatures higher than 20

console.log(temperatures.filter(function (temp) {
    return (temp["maxTemperature"] > 20 )
}).map(function(temp) {
    return temp.date
}))

// // Output result:
// [ '5 Jan', '6 Jan', '7 Jan' ]


//  Q4 Use .reduce() to find the date with the lowest temperature

console.log(temperatures.reduce(function (previous, current) {
    if (previous.minTemperature > current.minTemperature) {
        return current;
    } else {
        return previous;
    }
}, {date: 'No date', minTemperature: 9999}).date)


