//Logic
//Recursively split the array into two halves until there is only a single element
//Track back to merge them together by comparing 

function merge_sort(arr){
    let tmp = [];
    let start = 0;
    let end = arr.length - 1;
    merge_sort_aux(arr, start, end, tmp);
}

function merge_sort_aux(arr, start, end, tmp){
    if (start != end){
        let mid = Math.trunc((start + end) / 2);
        //split
        merge_sort_aux(arr, start, mid, tmp);
        merge_sort_aux(arr, mid+1, end, tmp);
        //merge
        merge_array(arr, start, mid, end, tmp);
        for (let i=start; i<end+1; i++){
            arr[i] = tmp[i];
        }
    }
}

function merge_array(arr, start, mid, end, tmp){
    let ia = start;
    let ib = mid+1;
    for (let k=start; k < end+1; k++){
        if (ia > mid){
            tmp[k] = arr[ib];
            ib += 1;
        }
        else if(ib > end){
            tmp[k] = arr[ia];
            ia += 1;
        }
        else if(arr[ia] <= arr[ib]){
            tmp[k] = arr[ia];
            ia +=1; 
        }
        else{
            tmp[k] = arr[ib];
            ib += 1;
        }
    }
}

