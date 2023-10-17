function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {

          let aux = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = aux;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  const arreglo = [64, 34, 25, 12, 22, 11, 90];
  console.log("Arreglo no ordenado: " + arreglo);
  bubbleSort(arreglo);
  console.log("Arreglo ordenado: " + arreglo);
  