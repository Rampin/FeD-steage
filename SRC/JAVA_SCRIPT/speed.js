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