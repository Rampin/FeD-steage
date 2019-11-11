function SetMap() {
    let set = new Set();
    for (i = 1; i < 11; i++) {
        set.add(i);
    }
    let map = new Map();
    let j = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    console.log(set);
    for (i = 1; i < 8; i++) {
        map.set(i , j[i-1]);
    }
    console.log(map);
    console.log(map.has(1));
}

SetMap();