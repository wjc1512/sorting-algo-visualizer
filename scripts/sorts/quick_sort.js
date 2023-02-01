function quick_sort(arr){
    let start = 0;
    let end = arr.length - 1;
    quick_sort_aux(arr, start, end);
}

function quick_sort_aux(arr, start, end){
    if (start < end){
        let boundary = partition(arr, start, end);
        quick_sort_aux(arr, start, boundary - 1);
        quick_sort_aux(arr, boundary + 1, end);
    }
}

function partition(arr, start, end){
    let mid = Math.trunc((start + end) / 2);
    let pivot = arr[mid];
    swap(arr, start, mid);
    let boundary = start;
    for(let k = start + 1; k < end + 1; k++){
        if (arr[k] < pivot){
            boundary += 1;
            swap(arr, k, boundary);
        }
    }
    swap(arr, start, boundary);
    return boundary;
}

function swap(arr, i, j){
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

arr = [9,1,3,4,2,10,8,6,7,5,4,11];
quick_sort(arr);
console.log(arr);