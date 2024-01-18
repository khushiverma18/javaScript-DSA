//object
let student={
    name:'khushi',
    class:'mca',
    age:'20',
    hobbies:['dancing','coding'],
    greet:function fc(){
    console.log("hello everyone")}
}
console.log(student)
console.log(student)


//Check the Number of Occurrences of a Character in the String

//convert first letter into uppercase                //charAt()use to extracted character or slice() is use return the rest of string
function strc(p){
    return(p.charAt(0).toUpperCase()+p.slice(1))
}
console.log(strc("mummy good morning"))


//count the no of vowels in a string
let k='hyy sir today i am very buzy'
console.log(k.match(/[aeiou]/gi).length)


//remove a property from an object             //  delete can be use
let person={
    name:"khushi",
    age:20,
    address:"modinager",
    hobby:{d:"dancing",p:"play"}
}
delete person.age;
console.log(person)

//check string starts and end characters
let nm="modinager"
if(nm.startsWith('m')&&nm.endsWith('r')){
    console.log("u are right")
}
 else if(nm.startsWith('m')){
console.log("start with m")
}
else if(nm.endsWith('m')){
    console.log("end with m")
}
else{
    console.log("no")
}


//check key exist in object
let employ={
    name:'khushiverma',
    class:'mca',
    collage:'srm'
}
let ch='name' in person
if(ch){
    console.log('name is in person')
}
else{
    console.log('name is not in person')
}
console.log(employ)


//clone of object
let score=[
    maths=500,
    english=600,
    hindi=340
]
let copy=score;
copy.maths=800;
console.log(copy)


//loop through an object
let m={
    name1:'khushi',
    name2:'muskan',
    name3:'simmi'
}
for(let key in m){
   let value=m[key]
    console.log(value);
}


