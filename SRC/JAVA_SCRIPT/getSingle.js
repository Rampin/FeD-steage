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


console.log(getSingle([1, 2, 3, 2, 1]));