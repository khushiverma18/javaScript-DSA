//convert decimal to binary           toString()use to covert any object to string or toString(2) use to decimal to banary
let num=45;
let result=num.toString(2)
console.log(result)


//32
//check palindrome string             using buil-in string function
let string='dady';
let s1=string.split('')
let reversst=s1.reverse();
let s2=reversst.join('')
if(string==s2){
    console.log('string is palidoram')
}
else{
    console.log('string is not palidoram')
}
console.log('your string:',string);
console.log(s2)



//check palindrome no
let m=131
let p=m.toString()
let m1=p.split('')
let m2=m1.reverse()
let m3=m2.join('')
if(p==m3){
    console.log('yes')
}
else{
    console.log('n0')
}
console.log(m3)


//sort words in alphabatic order
let str='hyy mam..good morning'
let st=str.split('')
st.sort();                       //sort() methods sots the string in alphabetical or ascending order
console.log('the sort words are:')
for(let i of st){
    console.log(i)
}


//replace 
let str1='hello mam,good morning'
console.log(str1.replace("mam","sir"))

//reverse
let str2='wrong is this'
let p1=str2.split('')
let p2=p1.reverse()
let p3=p2.join('')
console.log(p3)
