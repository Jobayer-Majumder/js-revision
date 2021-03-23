
// array distucturing
const array = [20, 30, 53, 67, 86];
const [x, y, ...z] = array;
console.log(z)

const array1 = [...array, 35, 45]
console.log(array1)


// object destructuring
const product = {
    phone : 500,
    laptop : 1000,
    watch : 100,
    tablet : 700
}
const {phone, laptop} = product;
console.log(phone, laptop)

const one = 10;
const tow = 35;

const obj = {one, tow};
console.log(obj)