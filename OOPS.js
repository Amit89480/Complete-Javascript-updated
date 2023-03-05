// let bioData="amit";
// console.log(bioData)

//or

// First way to create data
// let bioData={



//     myName:"Amit Pandey",
//     myAge:18,
//     getData:function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }

// };






// let bioData={



//     myName:"Amit Pandey",
//     myAge:18,
//     getData(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }

// };

// bioData.getData();




// 3rd way to create object (basically object inside object)

// let bioData={



//     myName:{
//         realName:"Amit",
//         title:"Pandey"
//     },
//     myAge:18,
//     getData:function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }

// };

// console.log(bioData.myName.title)




// Here this keyword

// console.log(this);

// console.log(this.alert("awesome"))


// function myName(){
//     console.log(this)
// }

// myName();



// another example


// var Name='amit';

// function myName(){
//     console.log(this.Name)
// }
// myName();


// another example

// const obj={
//     myAge:18,
//     myName(){
//         console.log(this.myAge)
//     }


// }
// obj.myName();



// this keyword not works with fat arrow function

// const obj={
//     myAge:18,
//     myName:()=>{
//         console.log(this.myAge)
//     }


// }
// obj.myName();


// let bioData={

// myName:{
//     realName:"Amit",
//     title:"Pandey"
// },
// myAge:29,
// getData(){
//     console.log(`My name is ${this.myName.realName} and my age is ${this.myAge}`)
// }



// }


// bioData.getData();

// above code will print -> My name is Amit and my age is 29



// object destructring

// const bioData=['amit','thapa',25];



// console.log(bioData[0])

// now desturing the Array


// let [fname,lname,age]=bioData

// console.log(fname)

// here in this we can add value too

// let [fname,lname,age,degree="BCA"]=bioData
// console.log(degree)



// let bioData={


//     myName:"Amit",
//     mlName:67,
//     myAge:78
    
// }

// let{myName,mlName,myAge}=bioData

// console.log(myName)





// object properties

// let myName="amit";

// const bioData={
//     [myName]:myName,
//    age:age
// }

// console.log(bioData)


// let name="Amit"
// let age=10

// const myData={name,age};

// console.log(myData)



// spread opearors


// const colors=['red','blue','orange'];

// const upDated=['white','saffron',...colors]

// console.log(upDated)




// es7 features


// 1. array includes


// const color=['red','blue','black']
// const ispresent=color.includes('red');

// console.log(ispresent)



// 2. exponential opeartor


// console.log(2**2)



// es8


// string padding

// const message="my name is amit";
// console.log(message.padStart(5))
// console.log(message.padEnd(10))



// const person={name:"amit",age:90};

// // console.log(Object.values(person))
// console.log(Object.entries(person))



// es2018

// const person={name:"amit",age:90};

// const sperson={...person}

// console.log(person)

// console.log(sperson)



// es2019  flat()

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8,[3,4,5], 9]
// ];

// const flattenArray = arr.reduce((accu, currE, index, arr) => {
//     return accu.concat(currE);
// })


// console.log(arr.flat(Infinity))

// const person={name:"amit",age:90};

// const arrObj=Object.entries(person)


// console.log(arrObj)
// console.log(Object.fromEntries(arrObj))


// es2020
// bigint
//  oldnum=Number.MAX_SAFE_INTEGER;
// let num=9007199254741000n+15n;

// console.log(typeof num)



// nullish coalesing
// console.log(2??2)



//es2014

"use strict"

var num=90
console.log(num)