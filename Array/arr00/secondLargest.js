function secondLargest(arr) {
    let  l = arr.length;
    let max = arr[0];
    let secMax;
    for (let i = 1; i<l; i++) {
        if(arr[i]>max){
         secMax = max
          max = arr[i]
        }else if(arr[i]>secMax && arr[i]!==max){
            secMax = arr[i]
            
        }
    }
    return secMax
   
}

const arr = [1, 2, 3, 4, 5,8, 11,44,9, 15]
result = secondLargest(arr);
console.log(result);



// by sorting the array
// function bToD(arr) {
//     let len = arr.length;
//     let sortedArr = arr.sort((a, b) => a - b);
//     let max = sortedArr[len - 1]
//     let secMax = sortedArr[len - 2]
//     return secMax;
// }