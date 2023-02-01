//Logic
//Start with first element
//Traverse all element after that to find minimum
//Swap current element with minimum (if exist)

//Invariant
//After each iteration, the number of elements sorted grows by 1 and starts from the left which when sorted is already in its final position

//Stablility?
//Nope, since we are finding minimum element. In the case where there are two elements with same value that comes after one another. The minimum element chosen
//when traversing through the rest of element in the list in respect to the current element would be the one coming after that which makes the algorithm not stable
//since if the latter was chosen, the sorted list would comprise of the latter similar element first then following by the initial similar element.

//Incremental?
//Nope, when appending an element that is the smallest in the list this would result in the algorithm requiring to traverse and arrange the element once again since
//when swapping with the newly appended smallest element it would affect the previously smallest element to be the rightmost in the list which will require arranging again

//Time Complexity
//Best-case: O(N^2), whether the list is already sorted or not, we still need to traverse to find minimum.
//Worst-case: O(N^2)

function selection_sort(the_list){
    let n = the_list.length;
    for (let mark = 0; mark < n - 1; mark++){
        let min_index = find_min(the_list, mark);
        let temp = the_list[mark];
        the_list[mark] = the_list[min_index];
        the_list[min_index] = temp;
    }
}

function find_min(the_list, mark){
    let pos_min = mark;
    let i = mark + 1;
    for (i; i < the_list.length; i++){
        if(the_list[i] < the_list[pos_min]){
            pos_min = i;
        }
    }
    return pos_min;
}
