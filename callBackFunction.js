const add = (num1, num2, say) => {
   const result = num1 + num2;
   console.log(result);
   say()
}

const sayHi = (one, tow) => {
    console.log('hi jobayer majumder')
}


add(35, 55, sayHi);