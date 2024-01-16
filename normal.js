//addition
let a=34;
let b=43;
let c=a+b
console.log(c)

//squre root
let k=5
let mm="khushi"
let result=Math.sqrt(k)
let result1=Math.sqrt(mm)
console.log(result1)
console.log(result)

//area of triangle
let hight=22
let base=55
let result3=(hight*base)/2;
console.log(result3)

//swap
let aa=45
let bb=43
let swap;
swap=aa
aa=bb
bb=swap
console.log(aa)
console.log(bb)

//kilometers to miles
let a2=4
let result4=a2*0.621371
console.log(result4)

//random no
let a3=Math.random()*(44-20)+20;
console.log(a3)
let a4=Math.floor(Math.random()*(10-1))+1;        //math.floor convert float to integer
console.log(a4)
 
//if else
let a5=23;
if(a5==0){
console.log("no is 0")}
else if(a5>0){
    console.log("no is positive")
}
else{
console.log("no is negative")
}
//odd even
const a6=56;
if(a6%2==0){
    console.log("no is even")
}
else{
    console.log("no is odd")
}
//largerno
let no1=45;
let no2=76;
let no3=49;
if(no1>no2&&no1>no2){
    console.log("no1 is larger to no2 or no3")
}
else if(no2>no1&&no2>no3){
    console.log("no2 is larger to no1 or no3")
}
else{
    console.log("no3 is larger ")
}
//find primary no
let sa=3;
let isPrime=true;
if(sa==1){
    console.log("1 is neither prime")
}
else if(sa>1){
    for(let i=2;i<sa;i++){
    if(sa%i==0){
        isPrime=false
        break;
    }
}
if(isPrime){
    console.log(sa+"is prime no")
}
else{
    console.log(sa+"is not prime no")
}
}
else{
    console.log("the no not prime")
}
//factorial
let sa1=5
let s=1
if(s==0){
    console.log("the factorial of 5 is 1")
}
else{
for(i=1;i<=sa1;i++){
    s=s*i
}
}
console.log(` factorial of 5 is ${s}` )

