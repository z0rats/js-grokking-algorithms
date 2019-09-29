findSmallest = (arr) => {
    let smallest = arr[0];
    let smallest_index = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallest_index = i;
      }    
    }
    return smallest_index;
} 
  
selectionSort = (arr) => {
    let sortedArr = [];
    const copyArray = [...arr];
    
    for (let i = 0; i < arr.length; i++) {
        let smallest_index = findSmallest(copyArray);
        sortedArr.push(copyArray.splice(smallest_index, 1)[0]);  
    }
    return sortedArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));