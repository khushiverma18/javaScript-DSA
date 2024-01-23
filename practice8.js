
//check if value include in arrays
let aee=[66,4,33,66,32]
let check=aee.includes(4)
if(check){
    console.log('yes')
}
else{
    console.log('no')
}

//insert an element
let p=[6,9,5,44,78]
let index=3
let element=12
p.splice(index,0,element)
console.log(p)


//append element
let arr=['khushi','muskan','simmi']
arr.push('karuna')
console.log(arr)


//check if an object is an array
function fu(arr){
   let result=Array.isArray(arr)          //Array.isArray is use tocheck object is an array
   if(result){
    console.log('yes')
   }
   else{
    console.log('no')
   }
}
fu([3,5,21])


//empty an array
let arr1=[455,55,333,44,45,5,66,7]
console.log(arr1)
arr1.splice(0)
console.log(arr1)


//add element start of an array
let ap=['s','p','y','w']
ap.unshift('q')                    //unshift method use to add element start into array
console.log(ap)


//remove duplicate in array
function fun(arr){
    let ar=[...new Set(arr)]        //conver array to set
    console.log(ar)
}
fun([3,8,6,6,7,4,6])


//marge two array or remove duplicate
let a1=['khushi verma','muskan verma']
let a2=['arjun verma','khushi verma']
let a3=a1.concat(a2)
console.log(a3)
let kl=[...new Set(a3)]
console.log(kl)


// //compare two array element
 let j=['1','2','3']
 let j2=['5','6','7']
 let result=JSON.stringify(j)==JSON.stringify(j2)
 if(result){
     console.log('yes')
 }
 else{
     console.log('no')
}



// program to create a two dimensional array[[][]]

function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 2;
const y = 3;

 let f=twoDimensionArray(x, y);
console.log(f)


//random array
let o=['khushi','shweta','ayush','aniket']
let o1=Math.floor(Math.random()*(o.length))
console.log(o[o1])


