const array = [2, 4, 25, 40, 30, 10, 23, 14];

const merge = (vetor, inicio, meio, fim) => {
    let temp = new Array();
    let p1, p2, tamanho, i, j , k;
    let fim1 = 0, fim2 = 0;
    tamanho = fim - inicio + 1;
    p1 = inicio;
    p2 = meio + 1;
    if(temp != null){
        for (i = 0; i < tamanho; i++) {
            if (!fim1 && !fim2) {
                if (vetor[p1] < vetor[p2]) {
                    temp[i] = vetor[p1++];
                } else {
                    temp[i] = vetor[p2++];
                }
                if(p1 > meio) fim1 = 1;
                if(p2 > fim ) fim2 = 1;
            } else {
                if(!fim1){
                    temp[i] = vetor[p1++];
                } else {
                    temp[i] = vetor[p2++];
                }
            }
        }
    }
    for (j = 0, k=inicio; j < tamanho; j++, k++) {
        vetor[k] = temp[j];        
    }
}

const mergeSort = (vetor, inicio, fim) => {
    let meio;
    if( inicio < fim ){
        meio = Number((inicio + fim)/2);
        mergeSort(vetor, Number(inicio), Number(meio));
        mergeSort(vetor, Number(meio + 1), Number(fim));
        merge(vetor, inicio, meio, fim);
    }
    return vetor;
}

console.log(array)
console.log(mergeSort(array, 0, array.length -1));