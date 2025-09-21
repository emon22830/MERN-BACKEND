
//function statement
function greet(){
    console.log("greet Moon")
}

greet()

//function are first class
function logGreeting(fn){
    fn()
}

logGreeting(greet)



//function expression
  const fn =function(){
    console.log("Function expression")
  }


fn()

//use the function expression on the fly
logGreeting(function(){
    console.log("Fly on the function")
})
