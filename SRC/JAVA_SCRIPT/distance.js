function distance(x1,y1,x2,y2){
    let X=Math.abs(x1-x2);
    let Y=Math.abs(y1-y2);
    let dist=Math.sqrt(X**2+Y**2);
    return dist;
}




console.log(distance(-1,0,1,0)===2);
console.log(distance(-2,0,-1,0)===1);
console.log(distance(1,0,1,1)===1);