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








