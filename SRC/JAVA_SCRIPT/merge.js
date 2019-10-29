function merge(left,right){
    let merged;
    
    left=left.join('');
    
    right=right.join('');

    merged=(left+right);
    
    merged=Array.from(merged);
    
    for(i=0;i<merged.length;i++){
        merged[i]=Number(merged[i]);
    }

    return merged;
}


console.log(merge([1,2,3],[4,5,6]));