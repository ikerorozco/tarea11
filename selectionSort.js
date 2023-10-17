function selectionSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  const arreglo = [64, 25, 12, 22, 11];
  console.log("Arreglo no ordenado: " + arreglo);
  selectionSort(arreglo);
  console.log("Arreglo ordenado: " + arreglo);
  