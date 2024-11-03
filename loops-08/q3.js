

  let numm=7;
 let noff = 0;
for (let div = 2; div * div <= numm; div++) {
    if (numm % div == 0) {  // Check if num is divisible by div
        noff++;
        break;             // Exit the loop if any divisor is found
    }
}

if (noff > 0) {
    console.log("not prime");
} else {
    console.log("prime");
}