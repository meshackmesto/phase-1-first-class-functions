function receivesAFunction(car){
    car();
}
function returnsANamedFunction(){
    return function car() {
        console.log("BMW");
    }
}

 function  returnsAnAnonymousFunction(){
    return function (){
    console.log("before all.");
 }
}