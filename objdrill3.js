'use strict';

let loaf = {
	flour: 300,
	water: 210,
	hydration: function() {
		return (this.water / this.flour) * 100.0;
	}
};
console.log(`flour: ${loaf.flour}, water: ${loaf.water}`);
console.log(`Loaf hydration: ${loaf.hydration()}`);



let object = {
	foo: 1,
	bar: 2,
	fum: 13,
	quux: 92,
	spam: 14
}

function stuff(object) {
	var text = " ";
	var x;
	 for (x in object) {
			text += x + " " + object[x] + " " ;
		}
	return text
}

console.log(stuff(object));
