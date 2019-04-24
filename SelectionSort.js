const array = [2, 4, 25, 40, 30, 10, 23, 14, 1];

const selectionSort = (vetor, tamanho) => {
    let i, j,  menor, troca;
    for (i = 0; i < tamanho -1; i++) {
        menor = i;
        for (j = i + 1; j < tamanho; j++) {
            if (vetor[j] <= vetor[menor]) menor = j;
        }

        if(i != menor){
            troca = vetor[i];
            vetor[i] = vetor[menor];
            vetor[menor] = troca
        }
        
    }

    return vetor
}

console.log(array)
console.log(selectionSort(array, array.length));