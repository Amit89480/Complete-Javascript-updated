var jokes=document.getElementById('jokes');
var button=document.getElementById('nextJoke');





// const generateJokes=()=>{
//     const header={
//         headers:{
//             Accept:"application/json"
//         }
//     }
    
// fetch('https://icanhazdadjoke.com',header)
// .then((res)=>res.json())
// .then((data)=>{
//     jokes.innerHTML=data.joke;
// }).catch((error)=>{
//     console.log(error);
// })
   

// }


// below code is using async and await

const generateJokes=async()=>{
    const header={
        headers:{
            Accept:"application/json"
        }
    }
    try{
    
const response=await fetch('https://icanhazdadjoke.com',header)
  const data =await response.json();

jokes.innerHTML=data.joke;
    }catch(error){
console.log(error);
    }

   

}

button.addEventListener('click',generateJokes);
generateJokes();