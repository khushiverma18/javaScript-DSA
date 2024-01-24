//check if a variable is undifined or null
function fun(variable){
    if(variable==null){
        console.log('the variable is undifind or null')
    }
    else{
        console.log('the variable is not undifind or null')
    }
}
fun(5);
fun('maths')
fun(null)


//set defult parameter value for a function
function add(a=2,b=4){
    return a+b
}
console.log(add())
console.log(add(3,5))

//work with connstants
const a=55;
console.log(a)
//const are block-scoped
{
    const a=3;
    let b1=3
    var c1=78;             //var are not block-scoped
    console.log(a)
    console.log(b1)
}
console.log(c1)


//settime out
setTimeout(function(){
    console.log('hi sir')
},3000)
   