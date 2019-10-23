function isEven(a) {
  if (typeof a !== "number" || a - Math.floor(a) !== 0 || a < 0) {
    return undefined;
  } else if (a === 0) {
    return true;
  } else {
    if (a % 2 !== 1) {
      return true;
    } else {
      return false;
    }
  }
}
/*
console.log(isEven(2.5) === undefined);
console.log(isEven('ciao') === undefined);
console.log(isEven(0) === true);
console.log(isEven(7) === false);
console.log(isEven(12) === true);
console.log(isEven(-4) === undefined);
*/


{
  let v = 0;
  function Speed(d, t) {
    if (typeof d !== "number" || typeof t !== "number" || d < 0 || t <= 0) {
      return undefined;
    } else {
      v = d / t;
    }
  }
  let d=6;
  let t=3;
  Speed(d, t);
  /*
  console.log(v);*/
}

{
	function DigitSum(n) {
		for(n; n>1; n/10){
			

			n=Math.floor(n/10)
		}
	}
}