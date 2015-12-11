# is-date-format [![Build Status](https://travis-ci.org/ragingwind/is-date-format.svg?branch=master)](https://travis-ci.org/ragingwind/is-date-format)

> Validate date string with user defined format. Origin source come from [Best way to validate date string format via jQuery - Stack Overflow](http://goo.gl/4HMmW)


## Install

```
$ npm install --save is-date-format
```


## Usage

```js
const isDateFormat = require('is-date-format');

isDateFormat('2015-10-23', 'yyyy-mm-dd');
```


## API

### isDateFormat(date, [format])

#### date

Type: `string`

String of date

#### format

Type: `string`

Date format. ex) `yyyy-mm-dd`

## License

MIT © [ragingwind](http://ragingwind.me)
