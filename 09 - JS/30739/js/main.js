const testArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

const insertSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {

    // console.log("aa")
    if (arr[i] > arr[i + 1]){
      let inPlace = false;

      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      

      for (let j = i; j > 0; j--) {
        if (arr[j -1] > arr[j]) {
          let temp = arr[j]
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;

        //   console.log(`i= ${i}, j= ${j}`)
        }else{
          inPlace = true
          break
        }
      }
    }
  }

  return arr;
}


console.log(insertSort(testArray))