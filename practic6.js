//merge property of two object
let person1={
    name:"khushi",
    age:20,
    clss:'mca'
}
let person2={
    name:'shweta',
    age:21,
    class:'mca'
}//1 method
let merge=Object.assign(person2,person1)
console.log(merge)//2 method
let newoj={...person1,...person2}
console.log(newoj)


//count the number of key/values in object
let collage={
    name:'srm',
    course:'mca',
    fec:100000
}
console.log(Object.keys(collage).length)
console.log(Object.values(collage).length)


//add key/value in object
let p={
    a:'arjun',
    b:'babu',
    c:'chotu'
}
p.d='dev'
console.log(p)

