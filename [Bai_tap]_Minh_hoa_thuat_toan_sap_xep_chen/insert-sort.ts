function insertSort(arr){
    let value,j
    for (let i = 1; i <arr.length ; i++) {
        value = arr[i]
        j=i-1
        while (j>=0&&value<arr[j]){
            arr[j]=arr[j+1]
            j--
        }
        arr[j]=value
    }
    return arr
}