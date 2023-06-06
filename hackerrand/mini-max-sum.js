function miniMaxSum(arr) {
    // Write your code here
    let sortedArr = arr.sort();
    let min = 0;
    let max = 0;
      for (let index = 0; index < arr.length; index++) {
            if(index < arr.length - 1){
                min += arr[index];
            }
            
            if(index > 0){
                max += arr[index];
            }
       }

    console.log(`${min} ${max}`)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}