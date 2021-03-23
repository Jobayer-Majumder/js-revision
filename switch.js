let num = 50;
switch(num){
    case 1000:
        console.log('im thousand')
        break;
    case 500:
    case 100:
    case 50:
        console.log('im not a thousand');
        break;
    default:
        console.log(`i don't know you`)
}