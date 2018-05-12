// const fs = require('fs')

const format = data => 
(data[0] ? Object.keys(data[0]).join('\t') : '')
 + '\n' + data.map(d => Object.values(d).join('\t')).join('\n')

// fs.writeFileSync('./gdsh.txt', result)

module.exports = format
