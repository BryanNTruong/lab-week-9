let num1 = 4;
let num2 = 6;
const str = "Hello";
let foo = true;

if(num1 === num2){
    console.log("test 1: They match");
}else{
    console.log("test 1: No luck");  
}

num1 = 6;
if(num1 === num2){
    console.log("test 2: They match");
}else{
    console.log("test 2: No luck");  
}

num2 = "4"

if(num1 === num2){
    console.log("test 3 (type): They match");
}else{
    console.log("test 3 (type): No luck");  
}
