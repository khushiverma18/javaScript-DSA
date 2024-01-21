//generate randome string
/*function fc(length){
let char='abcdefghijklmnopqrstuvwxyz';
let result='';
for(i=0;i<length;i++){
    let g=Math.floor(Math.random()*char.length);
    result+=char.charAt(randomIndex); 
}
return result;
}
console.log(generateString(5));*/


//check string with
let sr='hello mam'
let se='he'
if(sr.startsWith(se)){
    console.log('yes string start with he')
} 
else{
    console.log('no')
}


//convert object to string
let person={
    name:'khushi',
    age:20,
}
let result=JSON.stringify(person)           //JSON.stringify use to conver object into string
console.log(result)
console.log(typeof result)


//check string contains a substring
let s="khushi is very cute girl"
let se1='khushi'
console.log(s)
if(s.includes(se1)){
    console.log('yes')
}
else{
    console.log('no')
}

//compare to string
let s1='preet veerma'
let  s2='happy verma'
if(s1==s2){
    console.log('both string are same')
}
else{
    console.log('not same')
}


//encode a string to base64 
// let srm='karuna sharma'
// let result1=window.btoa(srm)          //window.btoa encode or window.atob decode
// console.log(result1)
// let result2=window.atob(result1)
// console.log(result2)


//replace all instance of character using built in method
let k='java script'
let p=k.split('a')
let p1=p.join('A')
console.log(p1)
