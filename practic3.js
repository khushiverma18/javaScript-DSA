
//sum using recursion
function sum(num){
    if(num>0){
        return num+sum(num-1);
    }
    else{
        return num;
    }
}
console.log(sum(50))
//factorial
function fac(no){
    if (no==0||no==1){
        return 1;
    }
    else{
      return no*fac(no-1)
    }
}
r=fac(5)
console.log(r)

//guess random no
/*function gus(){
   const no=Math.floor(Math.random()*(10-1))+1;
   let no1=parseInt(prompt("enter your no"))
   if(no==no1){
    console.log("your gusse is currect")
   }
   else{
    console.log("try again")
   }
}
gus();*/


//shuffle array
function arry(arr){
 for(let i=arr.length-1;i>0;i--){
    let j=Math.floor(Math.random()*i+1)
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
 }
 return arr;
}
console.log(arry([1,2,3,4,5,6]))
//cards
function fc(){
let card=(["spades","diamonds","club","heart"])
let ace=(["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"])
let deck=[];
    for(let i=0;i<card.length;i++){
    for(let j=0;j<ace.length;j++){
        deck.push(`${j}of ${i}`);
    }
    }
    for(let i1=deck.length-1;i1>0;i1--){
        let j1=Math.floor(Math.random()*i1+1)
        let tm=deck[i1]
        deck[i1]=deck[j1]
        deck[j1]=tm
        return deck;
    }
    console.log(`the first five card are:`)
} 
    console.log(fc());

    //fibonacci sequence using recursion
    function fib(no){
      if(no<2){
      return no
    }
    else{
        return fib(no-1)+fib(no-2)
    }
    }
    console.log(fib(8))

    