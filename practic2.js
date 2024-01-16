const prompt = require("prompt");

//table
let v=45;
for(var i=1;i<=10;i++){
    result=i*v
    console.log(`${v}*${i}=${result}`)  
}

//fibonacci seq
let v1=8;
let no1=0,no2=1,next;
for(let i=1;i<=v1;i++){
    console.log(no1)
    next=no1+no2;
    no1=no2;
    no2=next;
}

//armstrongno
//calculater
/*let val1=parseInt(prompt("enter your first value"))
let val2=parseInt(prompt("enter your second value"))
let op=prompt("enter your operator")
if(op=='+'){
    console.log(val1+val2)
}
else if(op=='-'){
    console.log(val1+val2)
}
else if(op=='*'){
    console.log(op=='*')
}
else{
    console.log(val1%val2)
}
//
let vall1=parseInt(prompt("enter your first value"))
let vall2=parseInt(prompt("enter your second value"))
let ope=prompt("enter your operator")
switch(ope){
    case'+':
    console.log(vall1+vall2)
    break;
    case'-':
    console.log(vall1-vall2)
    break;
    case'*':
    console.log(vall1*vall2)
    break;
    case'/':
    console.log(vall1/vall2)
    break;
    default:
        console.log("invalid operator")
        break;
}*/

//natural no
let num=100
let sum=0
for(let i=1;i<=num;i++){
    sum+=i
}
console.log(`the sum of natural is ${sum}`)

//last digit same
let a1=345;
let a2=275;
let a3=235;
res1=a1%10
res2=a2%10
res3=a3%10
if(res1==res2&&res1==res3){
    console.log("all three digit last value is equal")
}
else{
    console.log("it is not equal")
}

//HCF
let hcf;
let p=20
let p2=40
for(let i=1;i<=p&&i<=p2;i++){
   if(p%i==0&&p2%i==0){
    hcf=i;
   }
}
console.log(hcf)
//lcm
let hcf1;
let p3=20;
let p4=40;
for(let i=1;i<=p3&&i<=p4;i++){
    if(p3%i==0&&p4%i==0){
    hcf1=i;
    }
}
let lcm=(p3*p4)/hcf1
console.log(lcm)

//find factors
let no=12;
for(let i=1;i<=no;i++){
    if(no%i==0)[
        console.log(i)
    ]
}

