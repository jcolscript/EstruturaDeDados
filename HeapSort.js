const array = [2, 4, 25, 40, 30, 10, 23, 14];

const criaHeap = (vetor, i, fim) => {
    let aux = vetor[i];
    let j = i * 2 + 1;
    while (j < fim) {
        if (j < fim){
            if (vetor[j] < vetor[j + 1]){
                j = j + 1;
            }
        }
        if (aux < vetor[j]){
            vetor[i] = vetor[j];
            i = j;
            j = 2 * i + 1;
        } else {
            j = fim + 1;
        }
    }
    vetor[i] = aux;
}

const heapSort = (vetor, tamanho) => {
    let i, aux;
    for (i = Number((tamanho - 1) / 2); i >= 0; i--) {
        criaHeap(vetor, i, (tamanho - 1));
    }

    for(i = tamanho - 1; i >= 1; i--){
        aux = vetor[0];
        vetor[0] = vetor[i];
        vetor[i] = aux
        criaHeap(vetor, 0, i-1)
    }
    return vetor;
}

console.log(array)
console.log(heapSort(array, array.length));