let arr = [45, 46, 26, 98, 92, 200, 74, 6000, 649];
let array = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element > array){
        array = element;
    }
    
}
console.log(array)








const result = Math.max(...arr);
// console.log(result)