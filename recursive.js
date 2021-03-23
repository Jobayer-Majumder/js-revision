const getFactorial = num => {
    if(num === 1){
        return 1
    }else{
        return num * getFactorial(num - 1);
    }
}

const result = getFactorial(5);
console.log(result);