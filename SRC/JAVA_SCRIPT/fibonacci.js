function fibonacci(x) {
    let fibo = [];
    for (let i = 0; i <= x; i++) {
        if (i === 0 || i === 1) { fibo[i] = 1; }
        else { fibo[i] = (fibo[i - 1]) + (fibo[i - 2]); }
    }
    return fibo[x];
}





function fibonacci2(x) {
    let a=[1,1];
    
    if (x === 0 || x === 1) {
        return a[x];
    }
    else {
        if(a[x]==undefined){
            a[x]=fibonacci2(x - 2) + fibonacci2(x - 1);
        return a[x];}
        else {return a[x];}
    }
        

}

console.log(fibonacci(10));