let clickCount = 0;
let master_arr = [];
let arr = [];

function changeTheme(){
    if (clickCount == 0){
        darkMode();
        clickCount = 1;
    }
    else if(clickCount == 1){
        lightMode();
        clickCount = 0;
    }

    function darkMode(){
        document.getElementById("body-main").style.backgroundColor = '#333333';
        document.getElementById("body-main").style.color = "white";
        document.getElementById("bubble-sort").className = "btn btn-outline-light btn-sm";
        document.getElementById("insertion-sort").className = "btn btn-outline-light btn-sm";
        document.getElementById("quick-sort").className = "btn btn-outline-light btn-sm";
        document.getElementById("merge-sort").className = "btn btn-outline-light btn-sm";
        document.getElementById("selection-sort").className = "btn btn-outline-light btn-sm";
        document.getElementById("dark-light-mode-toggle").innerHTML = '<i class="fa-solid fa-sun" style="font-size: 25px"></i>';
        document.getElementById("dark-light-mode-toggle").style.paddingLeft = "13px";
        document.getElementById("dark-light-mode-toggle").style.paddingRight = "13px";
        document.getElementById("graph").style.borderColor = "white";

    }

    function lightMode(){
        document.getElementById("body-main").style.backgroundColor = 'white';
        document.getElementById("body-main").style.color = "black"
        document.getElementById("bubble-sort").className = "btn btn-outline-dark btn-sm";
        document.getElementById("insertion-sort").className = "btn btn-outline-dark btn-sm";
        document.getElementById("quick-sort").className = "btn btn-outline-dark btn-sm";
        document.getElementById("merge-sort").className = "btn btn-outline-dark btn-sm";
        document.getElementById("selection-sort").className = "btn btn-outline-dark btn-sm";
        document.getElementById("dark-light-mode-toggle").innerHTML = '<i class="fa-solid fa-moon" style="font-size: 25px"></i>';
        document.getElementById("dark-light-mode-toggle").style.paddingLeft = "16px";
        document.getElementById("dark-light-mode-toggle").style.paddingRight = "16px";
        document.getElementById("graph").style.borderColor = "black";
    }
}

function enableSorts(){
    document.getElementById("bubble-sort").disabled = false;
    document.getElementById("insertion-sort").disabled = false;
    document.getElementById("selection-sort").disabled = false;
    document.getElementById("merge-sort").disabled = false;
    document.getElementById("quick-sort").disabled = false;
}

function disableSorts(){
    document.getElementById("bubble-sort").disabled = true;
    document.getElementById("insertion-sort").disabled = true;
    document.getElementById("selection-sort").disabled = true;
    document.getElementById("merge-sort").disabled = true;
    document.getElementById("quick-sort").disabled = true;
}

function enableSettings(){
    document.getElementById("new-array").disabled = false;
}

function disableSettings(){
    document.getElementById("new-array").disabled = true;
}

function enableArrSize(){
    document.getElementById('arr_size').disabled = false;
    document.getElementById('arr_size').value = 110;
}

function disableArrSize(){
    document.getElementById('arr_size').disabled = true;
}

function divideIndicator(start, end){
    document.getElementById(start.toString()).style.borderStyle = "solid";
    document.getElementById(start.toString()).style.borderColor = "black";
    document.getElementById(end.toString()).style.borderStyle = "solid";
    document.getElementById(end.toString()).style.borderColor = "black";
}

function removeDivideIndicator(start, end){
    document.getElementById(start.toString()).style.border = ""
    document.getElementById(end.toString()).style.border = "";
}

function getArrSize(){

    for (let i = 0; i < 100; i++){
        arr[i] = master_arr[i];
    }

    var arr_size = document.querySelector('#arr_size');
    var no_of_bar = arr_size.value;

    for (let i = 0; i < arr.length; i++){
        if(i > no_of_bar-1){
            document.getElementById(i.toString()).style.display = "none";
        }
        else{
            document.getElementById(i.toString()).style.display = "block";
        }
    }

    arr = arr.slice(0, no_of_bar);
}

function getSpeed(){
    var speed = document.querySelector("#exe_speed");
    var exe_speed = speed.value;
    return exe_speed;
}

function Sleep() {
    let val = 110 - getSpeed()
	return new Promise(resolve => setTimeout(resolve, val));
}

function createArray(){
    master_arr = []
    arr = [];
    document.getElementById("graph").innerHTML = "";

    for (let x = 1; x <= 100; x++){
        let value = Math.floor((Math.random() * 100) + 1)
        arr.push(value);
        master_arr.push(value);
    }

    for (let y=0; y < 100; y++){
        const bar = document.createElement("div");
        bar.classList.add("barStyle");
        bar.id = y.toString();
        let value = arr[y] * 3;
        bar.style.height = value+"px";
        document.getElementById('graph').appendChild(bar);
    }

    enableSorts();
    enableArrSize();
}

function swap(i, j){
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function swap_id(i, j){
    let temp_id = document.getElementById(i.toString()).id;
    document.getElementById(i.toString()).id = document.getElementById(j.toString()).id;
    document.getElementById(j.toString()).id = temp_id;
}

function swap_elem(el1,el2)
{
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

function push_elem_right(el1, el2){
    const style2 = window.getComputedStyle(el2);
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;
}

function selected_elem(elem){
    elem.style.backgroundColor = "red";
}

function completed_elem(elem){ 
    elem.style.backgroundColor = "green";
}

function reset_elem(elem){
    elem.style.backgroundColor = "royalblue";
}

async function bubbleSortAlgo(){
    disableArrSize();
    disableSorts();
    disableSettings();

    let n = arr.length;
    n=n-1;
    for(n; n>=0; n--){
        // let swapped = false;
        for (let i=0; i < n; i++){
            selected_elem(document.getElementById(i.toString()));
            selected_elem(document.getElementById((i+1).toString()));
            await Sleep()
            if(arr[i] > arr[i+1]){
                swap(i, i+1);
                // swapped = true;
                swap_elem(document.getElementById(i.toString()), document.getElementById((i+1).toString()));
                swap_id(i, i+1);
            }
            reset_elem(document.getElementById(i.toString()));
            reset_elem(document.getElementById((i+1).toString()));
        }   
        // if (swapped == false){
        //     break;
        // }
        completed_elem(document.getElementById(n.toString()));
    }
    enableSettings();
}

async function insertionSortAlgo(){
    disableArrSize();
    disableSorts();
    disableSettings();

    let n = arr.length;
    for (let mark = 1; mark < n; mark++){
        let temp = arr[mark];
        let i = mark - 1;
        let temp_height = window.getComputedStyle(document.getElementById(mark.toString())).getPropertyValue('height');
        while ((i >= 0) && (arr[i] > temp)){
            selected_elem(document.getElementById(i.toString()));
            selected_elem(document.getElementById((i+1).toString()));
            await Sleep()
            arr[i+1] = arr[i];
            push_elem_right(document.getElementById((i+1).toString()), document.getElementById(i.toString()));
            reset_elem(document.getElementById(i.toString()));
            reset_elem(document.getElementById((i+1).toString()));
            swap_id(i, i+1);
            i -= 1;
        } 
        arr[i+1] = temp;
        document.getElementById((i+1).toString()).style.height = temp_height; 
    }
    enableSettings();
}

async function selectionSortAlgo(){
    disableArrSize();
    disableSorts();
    disableSettings();

    let n = arr.length;
    for (let mark = 0; mark < n; mark++){
        let pos_min = mark;
        let i = mark + 1;
        for (i; i < arr.length; i++){
            selected_elem(document.getElementById(pos_min.toString()));
            selected_elem(document.getElementById(i.toString()));
            await Sleep()
            reset_elem(document.getElementById(pos_min.toString()));
            reset_elem(document.getElementById(i.toString()));
            if(arr[i] < arr[pos_min]){
                pos_min = i;
            }
        }
        let min_index = pos_min;
        swap(mark, min_index);
        swap_elem(document.getElementById(mark.toString()), document.getElementById(min_index.toString()));
        swap_id(mark, min_index);
        completed_elem(document.getElementById(mark.toString()));
    }
    enableSettings();
}

function mergeSortAlgo(){
    disableArrSize();
    disableSorts();
    disableSettings();
    let tmp = [];
    let start = 0;
    let end = arr.length - 1;
    merge_sort_aux(start, end, tmp);

    enableSettings();
}

async function merge_sort_aux(start, end, tmp){
    if (start != end){
        let mid = Math.trunc((start + end) / 2);
        //split
        await merge_sort_aux(start, mid, tmp);
        await merge_sort_aux(mid+1, end, tmp);
        //merge
        await merge_array(start, mid, end, tmp);
        //copy
        for (let i=start; i<end+1; i++){
            arr[i] = tmp[i];
        }
    }
}

async function merge_array(start, mid, end, tmp){
    divideIndicator(start, end)
    let ia = start;
    let ib = mid+1;
    for (let k=start; k < end+1; k++){
        if (ia > mid){
            let value = arr[ib] * 3;
            document.getElementById(k.toString()).style.height = value + "px";
            tmp[k] = arr[ib];
            ib += 1;
        }
        else if(ib > end){
            let value = arr[ia] * 3;
            document.getElementById(k.toString()).style.height = value + "px";
            tmp[k] = arr[ia];
            ia += 1;
        }
        else if(arr[ia] <= arr[ib]){
            selected_elem(document.getElementById(ia.toString()));
            selected_elem(document.getElementById(ib.toString()));
            await Sleep()
            let value = arr[ia] * 3;
            document.getElementById(k.toString()).style.height = value + "px";
            reset_elem(document.getElementById(ia.toString()));
            reset_elem(document.getElementById(ib.toString()));
            tmp[k] = arr[ia];
            ia += 1; 
        }
        else{
            selected_elem(document.getElementById(ia.toString()));
            selected_elem(document.getElementById(ib.toString()));
            await Sleep()
            let value = arr[ib] * 3;
            document.getElementById(k.toString()).style.height = value + "px";
            reset_elem(document.getElementById(ia.toString()));
            reset_elem(document.getElementById(ib.toString()));
            tmp[k] = arr[ib];
            ib += 1;
        }
    }
    removeDivideIndicator(start, end)
}

async function quickSortAlgo(){
    disableArrSize();
    disableSorts();
    disableSettings();

    let start = 0;
    let end = arr.length - 1;
    await quick_sort_aux(start, end);

    enableSettings();
}

async function quick_sort_aux(start, end){
    if (start < end){
        let boundary = await partition(start, end);
        await quick_sort_aux(start, boundary - 1);
        await quick_sort_aux(boundary + 1, end);
    }
}

async function partition(start, end){
    divideIndicator(start, end)
    let mid = Math.trunc((start + end) / 2);
    let pivot = arr[mid];

    selected_elem(document.getElementById(start.toString()));
    selected_elem(document.getElementById(mid.toString()));
    swap(start, mid);
    swap_elem(document.getElementById(start.toString()), document.getElementById(mid.toString()));
    await Sleep();
    reset_elem(document.getElementById(start.toString()));
    reset_elem(document.getElementById(mid.toString()));

    let boundary = start;
    let tempArr = []
    selected_elem(document.getElementById(start.toString()));
    for(let k = start + 1; k < end + 1; k++){
        selected_elem(document.getElementById(k.toString()));
        if (arr[k] < pivot){
            boundary += 1;
            swap(k, boundary);
            swap_elem(document.getElementById(k.toString()), document.getElementById(boundary.toString()));
            completed_elem(document.getElementById(boundary.toString()));
            tempArr.push(boundary)
        }
        await Sleep();
        if (document.getElementById(k.toString()).style.backgroundColor != "green"){
            reset_elem(document.getElementById(k.toString()));
        }
    }   
    reset_elem(document.getElementById(start.toString()));
    for (let i = 0; i < tempArr.length; i++){
        reset_elem(document.getElementById((tempArr[i]).toString()))
    }

    selected_elem(document.getElementById(start.toString()));
    selected_elem(document.getElementById(boundary.toString()));
    swap(start, boundary);
    swap_elem(document.getElementById(start.toString()), document.getElementById(boundary.toString()));
    await Sleep();
    reset_elem(document.getElementById(start.toString()));
    reset_elem(document.getElementById(boundary.toString()));
    removeDivideIndicator(start, end)
    return boundary;
}


