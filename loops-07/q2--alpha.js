//next patterns and alphates
/*
ABCDE
 ABCD
  ABC
   AB
    A
*/ 
let nsp = 0;
for (let row = 1; row <= 5; row++) {
    let ans = " ";
    let val = 65;

    // Generate spaces
    for (let sp = 1; sp <= nsp; sp++) {
        ans += " ";
    }

    // Generate characters
    for (let ch = 1; ch <= 5 - row + 1; ch++) {
        ans += String.fromCharCode(val);
        val++;
    }

    nsp++;
    console.log(ans);
}


  
    


 