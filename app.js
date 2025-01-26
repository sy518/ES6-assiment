// let  is a data storage keyword
// var a =  "first";
// var a = 22;
let a = 44;     //hosting is ok
// let a =true;
if (true) {
    let a = 33

 console.log(a);    //block level//

}


console.log(a);
// let a=30  hosting is not allowe

for (var i=0; i<10; i++){
     setTimeout(() =>{
         
         console.log(i)
     }, 2000)
    
}
for (let j=0; j<10; j++){
    setTimeout(() => {

        console.log(j)
    }, 2000)
// console.log(j);

}

// Default perameter is used in function 
// jb hum function main koye perameter hota ha
//  interview que

function addMore(){
    return true
}

function sum (a,b, c= "first", d = addMore()) {               //c=first is default perameter
    return a + b +c + d;
}
console.log(sum(10, 20));

// function ke perameter mai function ko call nai kar sakty RangeError aye ga 
// function main(a, b=main()){
//     return a + b;
// }
// main()

// console.log(sum(10, 30));
// console.log(sum(10));

// Tamplate Literals
// in old way

let abc = "asdfghjklzxcvbnm,dfghjkertyuiovnm,fghjkrtyuiocvnm,./rtyuidfghjkcvbn";
let ijk = "dffyuioertyuiwertyuiertyuiodfhkrtyurtyurty";
console.log("asdfghjklzxcvbnm, dfghjkertyuiovnm, fghjkrtyuiocvnm,./rtyuidfghjkcvbn" +
    "dffyuioertyuiwertyuiertyuiodfhkrtyurtyurty" 
);

// in ES6
// beter wey to handle log string
console.log(`${abc} ${ijk}`);




