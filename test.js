import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn('2015-10-23', 'yyyy-mm-dd'), true);
	t.is(fn('2015/10/23', 'yyyy/mm/dd'), true);
	t.is(fn('10/23/2015', 'mm/dd/yyyy'), true);
	t.is(fn('2015,10,23', 'yyyy,mm,dd'), true);
	t.is(fn('10/23, 2015', 'mm/dd, yyyy'), false);
	t.is(fn('15/10/23', 'yyyy/mm/dd'), false);
	t.is(fn('2015-10-23', 'mm-yyyy-dd'), false);
	t.end();
});
