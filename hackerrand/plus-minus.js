function plusMinus(arr) {
    // Write your code here
    let value = 0, poss = 0, neg = 0;
    
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > 0){
            poss++;
        }else if(arr[index] < 0){
            neg++;
        }else if(arr[index] == 0){
            value++;
        }
 
    }
    
    poss = (poss / arr.length).toFixed(6)
    neg = (neg / arr.length).toFixed(6)
    value = (value / arr.length).toFixed(6)
    console.log(poss)
    console.log(neg)
    console.log(value)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}