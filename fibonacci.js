function fibs(n){
    array = [0,1]
    if(n==0){
        return []
    }
    if(n==1){
        return [0]
    }
    if(n==2){
        return array
    }

    for(let i=0;i<n-2;i++){
        array.push(array[i]+array[i+1])
    }
    return array
}


function fibsRec(n){
    if(n==0){
        return []
    }
    if(n==1){
        return [0]
    }
    if(n==2){
        return[0,1]
    }


    arr = fibsRec(n-1)
    arr.push(arr[arr.length-1] + arr[arr.length-2])
    return arr
    
}
