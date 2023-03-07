//currying


// This is how function currying

function sum(num1){


    return function(num2){
      return function(num3){
        console.log(num1+num2+num3);
      }
    }

}


// we can also do this in one line

// const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3)



// sum(5)(3)(8);

// Here we will do callback hell

setTimeout(()=>{
    console.log("work 1 is done");
    setTimeout(()=>{
        console.log("work 2 is done");
        setTimeout(()=>{
            console.log("work 3 is done");
            setTimeout(()=>{
                console.log("work 4 is done");
                setTimeout(()=>{
                    console.log("work 5 is done");
                    setTimeout(()=>{
                        console.log("work 6 is done");
                        
                    },1000)
                    
                },1000)
                
            },1000)
            
        },1000)
        
    },1000)
    
},1000)

