const array = [2, 4, 25, 40, 30, 10, 23, 14];

const insertionSort = (vetor, tamanho) => {
    let j, i, aux;
    let v = vetor
    for (i = 1; i < tamanho; i++) {
        aux = v[i];
        for (j = i; (j > 0) && (aux < v[j-1]) ; j--) {
            v[j] = v[j-1];           
        }
        v[j] = aux; 
    }
    return v
}

console.log(array)
console.log(insertionSort(array, array.length));