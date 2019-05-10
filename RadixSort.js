const array = [2, 4, 25, 40, 30, 10, 23, 14];

// Pegar o maior valor
const getMax = (vetor) => {
    let mx = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
        if(vetor[i] > mx){
            mx = vetor[i];
        }
    }
    return mx;
}

const countSort = (vetor, exp) => {
    let output = new Array();
    let i;
    let count = new Array();
    
    for(i = 0; i < vetor.length -1; i++){
        count[(vetor/exp)%10]++;
    }

    for(i = 1; i < 10; i++){
        count[i] += count[i - 1];
    }

    for( i = vetor.length - 1; i >= 0; i--){
        output[count[(vetor[i]/exp)%10]-1] = vetor[i];
        count[(vetor[i]/exp)%10]--;
    }

    for(i = 0; i < vetor.length - 1; i++){
        vetor[i] = output[i];
    }
}

const radixSort = (vetor) => {
    let m = getMax(vetor);
    for (let exp = 1; m / exp > 0; exp *= 10) {
        countSort(vetor, exp)
    }
}



console.log(array)
console.log(getMax(array));