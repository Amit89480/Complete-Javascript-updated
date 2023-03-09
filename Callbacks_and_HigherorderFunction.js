const add=(a,b)=>{
    return a+b
}

const sub=(a,b)=>{
    return a-b
}

const div=(a,b)=>{
    return a/b
}

const mul=(a,b)=>{
    return a*b
}

const Calculator=(a,b,operator)=>{
    return operator(a,b);
}


console.log(Calculator(4,5,add));//-->  here calculator is higher order function and which are passed as  a argiment is called callbacks 