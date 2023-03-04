// Creating an Array
var myPals = new Array;//This is optional it is done automatically
// var myPals = ["AAmit", 12, "Ashis", "Misti", "Rohan"]


// // Traversal of an Array

// for (i of myPals) {
//     console.log(i);
// }

// console.log(myPals[0])
// console.log(myPals.length)//It is a property

// we can also we for loop

// for (i = 0; i < myPals.length-1; i++)
// {
//     console.log(myPals[i]);
//     }



    // use for in

// for (elements in myPals) {
//         console.log(elements)
//     }

    // It provide the index value of the array



    // Also using forEach()

// myPals.forEach(function (elements, index, array) {
//     console.log(elements +"index: "+index + "array: "+array)
// });

// myPals.forEach((elements, index, array)=> {
//     console.log(elements);
// })



// Searching and filter in an array

// 1. IndexOf

// var myPals = ["AAmit", 12, "Ashis", "Misti", "Rohan"]

// console.log(myPals.indexOf("AAmit",2))



// 2.Last indexof

// var myPals = ["AAmit","AAmit", 12, "Ashis", "Misti", "Rohan"]

// console.log(myPals.lastIndexOf("AAmit"))


//3. Includes

// var myPals = ["AAmit", "AAmit", 12, "Ashis", "Misti", "Rohan"]

// console.log(myPals.includes("bhebhe"))->return false it can be used as validations

//Here we will start using filtration

// 1. find method

// var prices = [200,300,400,500,600,700,800,900]


// var findElems = prices.find((currele) => currele < 400);
// console.log(findElems)


// 2. findINdex

// var findElems = prices.findIndex((currele) => currele >  1400);
// console.log(findElems)


// 3. filter method
// var prices = [200, 300, 400, 500, 600, 700, 800, 900]

// const newPriceTag = prices.filter((elem,index) => {
//     return elem < 400;
// })



// console.log(newPriceTag)


// here we will seehow to sort and compare an array

// const months=["march","december","january","april"]

// console.log(months.sort())


// const number = [1, 67, 34, 23, 800, 34, 2, 3, 4, 5];
// console.log(number.sort()) //this will produce incirrect result as it first convert to string

 

// how to insert, delete , edit CRUD Operation


// 1. push method


const  animals = ["cat", "dog"]
const count=animals.push("elephant")


// it return the new length of an array


// console.log(count)


animals.push("chicken", "snake");

// console.log(animals)


// 2.unshift


// animals.unshift("cow", "buffalo")
// console.log(animals)


//3.pop()


// const names = ["amit", "ashis", "mohit", "aamit"]
// console.log(names.pop())
// console.log(names)



// 4.shift()

// const names = ["amit", "ashis", "mohit", "aamit"]

// console.log(names.shift())
// console.log(names)





// Challenge time




//1. add dec to end

// const newMonths=months.splice(months.length,0,"Dec")
// console.log(months)



const months = ["Jan", "march", "April", "June", "July"]

//sol 3



// Primary solution
// months[1] = "March";

// console.log(months)


// preffered solution
// const indexofMonth = months.indexOf("march")

// if (indexofMonth != -1) {
    

    
//     const update = months.splice(1, 1, "March")
    
//     console.log(months)
    
  


// } else {
//     console.log("NO such data found")
// }



//delete a random element from an array

const indexofMonth = months.indexOf("June")

// if (indexofMonth != -1) {
    

    
//     const update = months.splice(indexofMonth, 1)
    
//     console.log(months)
//     console.log(update)
  


// } else {
//     console.log("NO such data found")
// }

// Deleting all element using infinity


// const all = months.splice(indexofMonth, Infinity);


// console.log(months)






// Map(), filter(), reduce()

// 1. MAP()

const array1 = [1, 4, 9, 16, 25]

// let newArr = array1.map((curElement,index,arr) => {
    
//     return curElement > 9;



// })

// console.log(array1)
// console.log(newArr)



// let newArr = array1.map((currEle,index,arr)=> {
    
// return `index no = ${index} and the value is ${currEle} belong to ${arr}`


// })

// console.log(newArr)

// It does not mutate the original array


// Challenge Time


// Question 1

// let arr = [25, 36, 49, 64, 81]

// const SquareArr = arr.map((currE, index, arr) => {
//     return Math.sqrt(currE)
// })



// console.log(SquareArr)


// Question 2

// let arr = [1,2,3,4,5]

// let arr2 = arr.map((currE) => {
//     return currE * 2;
// }).filter((curr) => {
//     return curr <7;
// }).reduce((accumulator,currE,index,arr)=>{
//     return accumulator += currE;
// });


// console.log(arr2);


// Reduce() method

// let arr = [5, 6, 2]
 
// let sum = arr.reduce((accumulator,currE,index,arr) => {
// debugger;
//     return accumulator += currE;



// },7)


// console.log(sum)


// How to flatten an array


// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const flattenArray = arr.reduce((accu, currE, index, arr) => {
//     return accu.concat(currE);
// })


// console.log(flattenArray);








