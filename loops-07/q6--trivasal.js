/*
let calculated the  old and even count
243786
oddcount--
evencunt--
*/
let num = 243789;
let oddcount = 0;
let evencount = 0;

let temp = num;

while (temp > 0) {
    let id = temp % 10; // Get the last digit of temp

    // Check if the digit is even or odd
    if (id % 2 === 0) {
        evencount++; // Increment even count
    } else {
        oddcount++; // Increment odd count
    }

    temp = Math.floor(temp / 10); // Remove the last digit from temp
}

console.log(oddcount, evencount);

