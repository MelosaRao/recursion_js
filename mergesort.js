#!/usr/bin/node
function mergesort(arr){
    if(arr.length==1){
        return arr;
    }

    let mid = arr.length/2
    let left = mergesort(arr.slice(0,mid))
    let right = mergesort(arr.slice(mid,))
    return merge(left,right)
}

function merge(left,right){
    let merged = []
    let counter_left = 0
    let counter_right = 0
    while(counter_left<left.length && counter_right<right.length){
        if(left[counter_left]>right[counter_right]){
            merged.push(right[counter_right])
            counter_right++;
        }
        else{
            merged.push(left[counter_left]);
            counter_left++;
        }
    }

    if(counter_left<left.length){
        for(let i=counter_left; i<left.length;i++){
            merged.push(left[i])
        }
    }

    if(counter_right<right.length){
        for(let i=counter_right; i<right.length;i++){
            merged.push(right[i])
        }
    }

    return merged
}
