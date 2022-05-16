function insertSort(arr){
    let value,j
    for (let i = 1; i <arr.length ; i++) {
        value = arr[i]
        j=i-1
        while (j>=0&&value<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=value
    }
    return arr
}
let array=[3,4,5,1,2,6,7]
console.log(insertSort(array));