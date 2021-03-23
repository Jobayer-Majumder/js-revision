function sayHello(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        // console.log(arg);
        sum = sum + arg;
    }
    return sum;
}
    

const result = sayHello(15, 56, 65, 98);
console.log(result);


