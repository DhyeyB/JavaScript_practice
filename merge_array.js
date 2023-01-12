arr1 = ["Dhyey", "Jitendrabhai"];
arr2 = ["Bhattasana"];

// 1st method

const mergeArrayFunction1 = (arr1,arr2) => {
    const mergeArray = arr1.concat(arr2);

    return mergeArray;
} 

let merge1 = mergeArrayFunction1(arr1,arr2);
console.log(merge1);


// 2nd method

const mergeArrayFunction2 = (arr1,arr2) => {
   const mergeArray = [...arr1, ...arr2];

   return mergeArray;
}

let merge2 = mergeArrayFunction2(arr1,arr2);
console.log(merge2);


// 3rd method

const mergeArrayFunction3 = (arr1,arr2) => {
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }

    return arr1;
}

let merge3 = mergeArrayFunction3(arr1,arr2);
console.log(merge3);