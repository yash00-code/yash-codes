//let name="vikas"
//console.log(name.charCodeAT(3))


//patterns and alprabites-------------
/*
A
AB
ABC
ABCD
ABCDE
*/
//Will seen the this in sd code.
for(let row=1;row<=5;row++){
    let ans=" ";
    let val=65;
    for(let ch=1;ch<=row;ch++){
        ans=ans+(String.fromCharCode(val))
        val++;
    }
    console.log(ans);
    
}

//////converted into number that the numericals----


let num=65;
console.log(String.fromCharCode(num));//theri will gies the alaphates in numbers





