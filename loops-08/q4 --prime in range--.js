//give the all prime number 300


let start=0;
let end=300;
for(let num=start;num<=end;num++){
    let nof=0;

    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof++;
            break;
        }
    }
    if(nof>0){
        console.log("not prime");
        
    }else{
        console.log("prime");
        
    }
}

//second approach

let st=0;
let ed=300;
let primecount=0;
let notprimecount=0;
for(let num=st;num<=ed;num++){
    let nof=0; 
    if (num < 2) {  // 0 and 1 are not prime numbers
        notprimecount++;
        continue;
    }
  
    

    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            nof++;
            break;
        }
    }
    if(nof>0){
        console.log("not prime");
        notprimecount++;
        
    }else{
        console.log("prime");
        primecount++;
        
    }
}
console.log("total of prime number ",primecount);
console.log("total of not prime numbers",notprimecount);

