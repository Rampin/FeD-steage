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
  