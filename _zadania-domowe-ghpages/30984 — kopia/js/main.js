let test = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log(test);


function quickSort(arr, l, r) {
  if(l < r) {
    // console.log(l)
    // console.log(r)

    const lastDiv = divideArray(arr, l, r)
    console.log(`L: ${l}, R: ${r}`);
    quickSort(arr, l, lastDiv - 1);
    quickSort(arr, lastDiv + 1, r)
    
  }
  return arr;
}

const divideArray = (arr, l, r) => {
  const divIndex = Math.ceil((l+r)/2);
  const divValue = arr[divIndex];
  
  let currentPosition = l;

  swapValues(arr, divIndex, r);

  for (let i = l; i < arr.length - 1; i++) {
    if (arr[i] < divValue ) {
      swapValues(arr, i, currentPosition++);
    }
  }
  swapValues(arr, r, currentPosition)
  
  // console.log(`Indeks podziału: ${divIndex}, wartość: ${divValue} + currentPos: ${currentPosition}`);
  // console.log(arr);
  return currentPosition;
}


const swapValues = (arr, indA, indB) => {
  let tempVal = arr[indA];
  arr[indA] = arr[indB];
  arr[indB] = tempVal;
}

;
console.log(quickSort(test, 0, test.length - 1));

// console.log(divideArray(test, 0, test.length - 1));
// quickSort(test, 0, test.length- 1);