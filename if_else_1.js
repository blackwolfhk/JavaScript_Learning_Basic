// A very simple if...else example

const marketCap = 123456789 // <- to input any amount of marketcap here

if (marketCap >= 500000000) {
    console.log("The company might be qualified to list on Main Board~")
} else if (marketCap >= 45000000 && marketCap < 500000000) {
    console.log("The company might be qualified to list on GEM~")
} else {
    console.log("The company might give up to list~")
}

// The company might be qualified to list on GEM~
