var fs = require('fs')
var xlsx = require('node-xlsx')

var excelName = './total0507.xlsx'
var list = xlsx.parse(excelName);
console.log(list[0].data[1][32])
r1 = []
for(var i = 1; i<list[0].data.length;i++){
    var s1 = list[0].data[i][28]
    var s2 = list[0].data[i][29]
    var s3 = list[0].data[i][30]
    var s4 = list[0].data[i][31]
    var s5 = list[0].data[i][32]
    var s6 = list[0].data[i][33]
    r = new Object()
    r[18] = s1
    r[19] = s2
    r[20] = s3
    r[21] = s4
    r[22] = s5
    r[23] = s6

  //  console.log(s1)
    for(var j in r){
    if(r[j]!= undefined ){
        r1.push([r[j].slice(0,9)])
    }
}
}

// var file = xlsx.build([{
//     name: 'test',
//     data: r1
// }])
// fs.writeFileSync('number.xlsx', file, 'binary', { 'flag': 'w' });
// console.log('finished')



