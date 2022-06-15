function transformArray(array){
    if(!array || array.length === 0 ) return -1;
    for(o in array){
        if ( (array[o] % 2  === 0) && !(array[o] ===0) ){
            array[o] = 0
        }
    }
    return array
};
// let arr = [1,0, 3, 4, 6, 80, 33, 23, 90]
let arr = []
arr = transformArray(arr);

console.log(arr)