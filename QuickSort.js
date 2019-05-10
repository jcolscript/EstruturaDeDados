const array = [2, 4, 25, 40, 30, 10, 23, 14];

const particiona = (vetor, inicio, fim) => {
    let esq, dir, pivo, aux;
    esq = inicio;
    dir = fim;
    pivo = vetor[inicio];
    while (esq < dir) {
        while (vetor[esq] <= pivo) {
            esq++;
        }
        while (dir > pivo){
            dir--;
        }
        if (esq < dir) {
            aux = vetor[esq];
            vetor[esq] = vetor[dir];
            vetor[dir] = aux
        }
    }
    vetor[inicio] = vetor[dir];
    vetor[dir] = pivo;
    return dir;
}

const quickSort = (vetor, inicio, fim) => {
    let pivo;
    if(fim > inicio){
        pivo = particiona (vetor, inicio, fim);
        quickSort(vetor, inicio, pivo - 1);
        quickSort(vetor, pivo + 1, fim);
    }

    return vetor;
}

console.log(array)
console.log(quickSort(array, 0, array.length - 1));