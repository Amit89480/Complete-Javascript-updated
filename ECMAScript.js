//  LET VS CONST VS VAR

// function Testing() {
//     var myName = "Amit";
//     console.log(myName)
//         if(true){
//             var myLastname = "Pandey";
//             console.log(myLastname);
//         }
//     console.log("outer" + myLastname);
// }


// Testing();


// here we have used let which is block scoped


// function Testing() {
//     let myName = "Amit";
//     console.log(myName)
//         if(true){
//             let myLastname = "Pandey";
//             console.log(myLastname);
//         }
//     console.log("outer" + myLastname);
// }


// Testing();
 


// Template Literate


// for (i = 1; i <= 10; i++)
// {
//     console.log(`8 X ${i} = ${8 * i}`);
// }


// Default arguments

// function mul(a,b=10)
// {
//     return a * b;
// }
// console.log(mul(56,10));
// console.log(mul(10));


// Arrow Function

const sum = () => (a=10)+(b=100)


// first have to declare then we can call we cant call it before
console.log(sum());



