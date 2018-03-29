const xlsx = require('node-xlsx');
const fs = require('fs')
const buffer = xlsx.build([{ name: 'test', data: [[1,2,3],[3,4,5]] }])
console.log(buffer)
fs.writeFileSync('1.xlsx',buffer,'binary',{'flag':'w'}); 