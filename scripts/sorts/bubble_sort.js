//Logic
//Start at the leftmost element,
//If greater than next element ==> swap,
//Move to right.

//Invariants
//For each traversal there is a maximum of N-1 swaps performed, N=length of list
//After each traversal, the largest element gets sorted (last position)
//Only a maximum of N-1 traversal is needed to sort

//Stability? (maintains relative order among elements)
//Yes, since elements only swap when it is larger therefore considered stable.

//Incremental? (needs to re-compute after small changes)
//Scenario A(Add elem to back of list)
//Not incremental, it can take numerous iterations if element added is smaller than alot of element in the list.
//Scenario B(Add elem to front of list)
//Incremental, it only takes 1 iteration to sort it because it can compare with all the elements in the list to determine its position.

//Time-complexity
//Best-case: O(N), when the list is already sorted
//Worst-case: O(N^2)

function bubble_sort(the_list){
    let n = the_list.length
    for(n-1; n>0; n--){
        let swapped = false;
        for (let i=0; i < n; i++){
            if(the_list[i] > the_list[i+1]){
                swap(the_list, i, i+1);
                swapped = true;
            }
        }
        if (swapped == false){
            break;
        }
    }
}

function swap(the_list, i, j){
    temp = the_list[i];
    the_list[i] = the_list[j];
    the_list[j] = temp;
}

