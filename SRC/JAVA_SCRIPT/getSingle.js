function getSingle(left) {
    ht = {};
    for (i = 0; i < left.length; i++) {
        if (ht[left[i]] === undefined) {
            ht[left[i]] = 1;
        }
        else { ht[left[i]] += 1; }
    }
    let prop = Object.keys(ht);
    for (i = 0; i < prop.length; i++) {
        if (ht[prop[i]] === 1) { return prop[i]; }
    }
}


//console.log(getSingle([1, 2, 3, 2, 1]));


function hammingDistance(n, m){
    let cont=0;
    let nbin=[];
    let mbin=[];
    let j=0;
    let k=0;
    while(n>=1){
      nbin[k]=n%2;
      k=k+1;
      n=n/2;}
    while(m>=1){
      mbin[j]=m%2;
      j=j+1;
      m=m/2;}
    for(let i=0;i<(Math.max(mbin.length,nbin.length));i++){
        if(mbin[i]===undefined){
            mbin[i]=0;
        }
        if(nbin[i]===undefined){
            nbin[i]=0;
        }
        if(mbin[i]+nbin[i]===1){
            cont=cont+1;
            }
    }
    return cont;
}

console.log(hammingDistance(17,117));

let n=17
let k=0;
nbin=[];
    while(n>=1){
      nbin[k]=n%2;
      k=k+1;
      n=n/2;}
console.log(nbin);

console.log(8.5%2);
