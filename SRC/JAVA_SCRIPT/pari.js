function isEven(a) {
	if (typeof a !== 'number' || a - Math.floor(a) !== 0) {
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

console.log(isEven(2.5)===undefined);
console.log(isEven('ciao')===undefined);
console.log(isEven(0)===true);
console.log(isEven(7)===false);
console.log(isEven(12)===true);
