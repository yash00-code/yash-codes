//armsttrong number
let num=153;
let temp=num;
let temp2=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10)
    nod++;
}
console.log(nod);//they gives the number of factors



let sum=0;
while(temp2>0){
    let id=temp2%10;
    sum=sum+Math.pow(id,nod)
    temp2=Math.floor(temp2/10)
}
if(nod==sum){
    console.log("yes");
    
}else{
    console.log("no");
    
}
