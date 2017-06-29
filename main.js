var fontDetect = require('./library/detector');
var fontConvert = require('./library/converter');
var syllBreak = require('./library/syllBreak');
var spellingFix = require('./library/spellingCheck')

module.exports = {
	fontDetect,
	fontConvert,
	syllBreak,
	spellingFix
}
