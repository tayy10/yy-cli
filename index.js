var fis = module.exports = require('fis3');
fis.require.prefixed.unshift('yy');
fis.cli.name = 'yy';
fis.cli.info = require('./package.json');


