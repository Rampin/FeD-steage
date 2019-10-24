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

let v = 0;
function Speed(d, t) {
  if (typeof d !== "number" || typeof t !== "number" || d < 0 || t <= 0) {
    return undefined;
  } else {
    v = d / t;
  }
}
let d = 6;
let t = 3;
Speed(d, t);
/*
  console.log(v);*/

function digitSum(n) {
  let sum = 0;
  for (n; n >= 1; n = Math.floor(n / 10)) {
    sum = sum + (n % 10);
  }
  return sum;
}

function digitSum2(n) {
  n = n.toString();
  let sum2 = 0;
  for (let i = 0; i < n.length; ++i) {
    sum2 = sum2 + Number(n[i]);
  }
  return sum2;
}

//console.log(digitSum(151));
console.log(digitSum2(351));
