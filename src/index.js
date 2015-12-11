'use strict';

// [Best way to validate date string format via jQuery - Stack Overflow](http://goo.gl/4HMmW)

module.exports = (date, format) => {
	var delimiter = '/';

	format = format || 'mm/dd/yyyy';
	delimiter = /[^mdy]/.exec(format)[0];
	format = format.split(delimiter);
	date = date.split(delimiter);

	var m;
	var d;
	var y;

	for (var i = 0, len = format.length; i < len; i++) {
		if (/m/.test(format[i])) {
			m = date[i];
		} else if (/d/.test(format[i])) {
			d = date[i];
		} else if (/y/.test(format[i])) {
			y = date[i];
		}
	}

	return (
		m > 0 && m < 13 &&
		y && y.length === 4 &&
		d > 0 && d <= (new Date(y, m, 0)).getDate()
	) === true;
};
