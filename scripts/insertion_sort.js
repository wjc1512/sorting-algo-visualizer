//Logic
//List is split into two parts [consist first element only], sorted part and unsorted part [consist rest of the element] (Logically, not physically).
//for each iteration the last element in sorted part is compared with first element of unsorted part.
//If smaller reassign to itself(basically does nothing), If larger we need to ensure it reaches the correct position in sorted part [iteration]
    // In this block of iteration we either iterate through the whole sorted part (element in unsorted part is smallest in sorted part) or stop when an element in sorted part is bigger than the current element in unsorted part
    // Since current element of unsorted part is larger, we move the element of sorted part upwards (sorted position decrement)
    // This process of iteration will repeat until all elements in sorted part have been iterated or element in sorted position is not larger than the current element in unsorted part.
//If smaller reassign to itself[repeating from above], otherwise we insert the current element of unsorted part to the correct position in sorted part (position in which the smallest element in sorted part is larger than current element in unsorted part)

//Invariant
//Elements in 1 of 2 parts of the list are sorted and grows by 1 each iteration

//Stability?
//Yes, since elements are only shuffled to the right when it is larger than element in the left and element in the left is then shuffled down if it is smaller.

//Incremental?
//Yes, if we append a new element into the back and place marker at last sorted since list on the left of appended element is already sorted and this would resultingly only take 1 iteration to move appended element to it's position.

//Time-complexity
//Best-case: O(N), when list is already sorted.
//Worst-case: O(N^2)

function insertion_sort(the_list){
    let n = the_list.length;
    for (let mark = 1; mark < n; mark++){
        let temp = the_list[mark];
        let i = mark - 1;
        while ((i >= 0) && (the_list[i] > temp)){
            the_list[i+1] = the_list[i];
            i -= 1;
        } 
        the_list[i+1] = temp;
    }
}


