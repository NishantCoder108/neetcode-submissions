function findSmallest(arr) {
  // your solution here

  if (!Array.isArray(arr)) return false;
  if (arr.length == 0) return null;

  let min;

  //loop all element -> check every element -> compare and update val

  for (let i=0; i< arr.length; i++){
    let val = arr[i];

    if (!Number.isFinite(val)) return false;
    // if (min === undefined) {min = val};
    min === undefined ? (min = val) : ((val < min) && (min = val));
    // console.log("Val:",  val, "Min:", min);
    // if(val < min){
    //     min = val;
    //  }
  }

  return min;
}


let a = [0, NaN,0,3];
let res = findSmallest(a);

console.log(res)


// function isExpectedArr(arr){

//     for (let i=0; i< arr.length; i++){
//         // console.log(arr[i])
//         // console.log("Type of Arr[i]", typeof arr[i]);
//         if(Number.isFinite(arr[i])){
//             return false;
//         }
//     }

//     return true;
// }
// // console.log(typeof NaN);
// // console.log("Is Match :", (a[1].toString()) === Object.toString(NaN));

// // console.log(a[0].toString())
// // console.log(Object.toString(a[0]));

// let nonNumbers = [-Infinity, Infinity, NaN];

// console.log(nonNumbers.includes(a[1]));
// console.log(Number.isFinite(a[1]))
// // let g = [{name: "nih"}];
// // console.log(Array.isArray(g))
//.isFinite -> It handles infinite , NaN, non-numbers and fixed case
