var numbersToSort = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log(numbersToSort)

let length = numbersToSort.length;
// let counter = 0;

do {
  var sorted = true;

  for (let i = 0; i < length; i++){
    let temp = 0;
    // counter++;

    if (numbersToSort[i] > numbersToSort[i+1]) {
        sorted = false;
        // console.log(`Pierwsza: ${numbersToSort[i]}, druga: ${numbersToSort[i+1]}`);

        temp = numbersToSort[i];
        numbersToSort[i] = numbersToSort[i+1];
        numbersToSort[i+1] = temp;
    }
  }
  length -= 1;

}
while (!sorted);

console.log(numbersToSort);
// console.log(counter)