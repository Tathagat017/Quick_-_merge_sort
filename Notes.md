# Quick\_-_merge_sort

implementation of quick and merge sorts

</Quick sort>
function QuickSort(arr,s,e) {

if(s>=e)return ;
//partition the array -> partition will return index of the pivot
p = partition (arr, s, e) -->return index of correct pivot
Quicksort (arr,s,p-1)//left ->sort left
Quicksort (arr,p+1,e)//right ->sort right

}
function partition(arr,s,e) {

//choose the pivot
let pivot = arr[e];

let i = s-1;//->standing one place behind start index

for(let j = s ;j<=e-1;j++>)
{
if(arr[j]<pivot)
{
i++;//increase size of left partition by one
swap (arr[j],arr[i]);
}
}
swap(arr[i+1],arr[pivot]);
return i+1;
}
