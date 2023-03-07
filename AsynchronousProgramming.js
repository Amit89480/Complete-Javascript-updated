// 1. hoisting

// console.log(myName)
// var myName;
// myName="Amit";


// will be as 
// myName="Amit";
// var myName; 
// console.log(myName)



// scope chain and lexical scooping

const PI=3.142;//-->scope chain;



//2:lexical scooping

// let a ="hey";

// let first=()=>{
//     let b="I am";
//     let second=()=>{
//         let c="Amit";
//         console.log(a+b+c);
//     }
//     second();

// }
// first();


//Closure property


// const outerFun=(a)=>{
// let b=10;
// const inner=()=>{
//     console.log(a+b);
// }
// inner();
// }


// outerFun(5)

//Same as exical scooping


//to get in more depth

const outerFun=(a)=>{
    let b=10;
    const inner=()=>{
        console.log(a+b);
    }
    return inner;
    }
    
    
    let ClosureCheck=outerFun(5)
    console.log(ClosureCheck)
    console.log(ClosureCheck())

    console.dir(ClosureCheck)





// Synchronous vs asynchronous

// const func1=()=>{
//     console.log("function 1 is callled");
// }

// const func2=()=>{
//     func1();
//     console.log("func2 is called");
// }
// func2();



// asynchromous

// const func2=()=>{
//     setTimeout(()=>{
//         console.log("function 2 is called");
//     },2000);
// };
// const func1=()=>{
//     console.log("function 1 is called");
//     func2();
//     console.log("function 1 is called again");
// }
// func1();

