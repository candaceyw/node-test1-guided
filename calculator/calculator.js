function add(...values) {
	return values.reduce((a, b) => a + b, 0);
}

function subtract(a = 0, b = 0) {
	return a - b;
}

function multiply(a = 0, b = 0) {
	return a * b;
}

function divide(a = 1, b = 1) {
	if (typeof a !== 'number' || typeof b !== 'number')
		throw new TypeError('expected a number, got something else');
	if (b == 0) {
		throw new Error('cannont divide by zero');
	}
	return a / b;
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
};
