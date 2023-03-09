var jokes=document.getElementById('jokes');
var button=document.getElementById('nextJoke');





const generateJokes=()=>{
    const header={
        headers:{
            Accept:"application/json"
        }
    }
    
fetch('https://icanhazdadjoke.com',header)
.then((res)=>res.json())
.then((data)=>{
    jokes.innerHTML=data.joke;
}).catch((error)=>{
    console.log(error);
})
   

}

button.addEventListener('click',generateJokes);
generateJokes();