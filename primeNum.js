

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if(num % i == 0){
            return 'Your number is a not a prime number';
            
        } 
    }
    return 'Your number is a prime number'
}
const result = isPrime(13)
console.log(result)