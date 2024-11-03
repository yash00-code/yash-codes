//number trivsal and patterns
/*
4578
4
5
6
7

*/
//4578/1000 4.578 floor print 4
let num = 1234;
let temp = num;
let nof = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    nof++;
}

let div = Math.pow(10, nof - 1);
console.log(div);

num = temp;  // Reset num to its original value

while (num > 0) {
    let fd = Math.floor(num / div);
    console.log(fd);
    num = num % div;
    div = Math.floor(div / 10);
  }
