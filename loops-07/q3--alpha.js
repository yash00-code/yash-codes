//patterns and alphaties
/*
ABCDE
 BCDE
  CDE
   DE
    E
*/



let nsp = 0; // Number of spaces at the start of each row
for (let row = 0; row < 5; row++) { // Start from row 0 to 4 (5 rows)
    let ans = ""; // Initialize the answer string for the current row
    let val = 65 + row; // Set starting character value based on the row

    // Generate spaces
    for (let sp = 0; sp < nsp; sp++) { // Generate spaces for the current row
        ans += " ";
    }

    // Generate characters
    for (let ch = 0; ch < 5 - row; ch++) { // Adjust to 5 - row to get the correct number of characters
        ans += String.fromCharCode(val + ch); // Use the starting value
    }

    nsp++; // Increase the number of spaces for the next row
    console.log(ans); // Output the result for the current row
}