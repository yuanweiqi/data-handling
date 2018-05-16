var fs = require('fs')
var xlsx = require('node-xlsx')

var result = new Object();
var excelName = '11.xlsx'
var excelName1 = '22.xlsx'
var r = []
var list = xlsx.parse(excelName);
var list1 = xlsx.parse(excelName1)
for(var i in list1[0].data) {
    var l1 = list1[0].data[i][4]
    for(var j in list[0].data) {
        var l = list[0].data[j][4]
        if(l1 == l) {
            var a1 = list1[0].data[i][5]
            var a2 = list1[0].data[i][6]
            var a3 = list1[0].data[i][7]
            var a4 = list1[0].data[i][8]
            var a5 = list1[0].data[i][9]
            var a6 = list1[0].data[i][10]
            var a7 = list1[0].data[i][11]
            var a8 = list1[0].data[i][12]
            var a9 = list1[0].data[i][13]

            var s4 = list[0].data[j][5]
            var s5 = list[0].data[j][6]
            var s6 = list[0].data[j][7]
            var s7 = list[0].data[j][8]
            var s8 = list[0].data[j][9]
            var s9 = list[0].data[j][10]
            var s10 = list[0].data[j][11]
            var s11 = list[0].data[j][12]
            r.push([l1,a1,a2,a3,a4,a5,a6,a7,a8,a9,
                s4, s5, s6, s7, s8, s9, s10, s11,'',1111])
          //  console.log(r)           
           
          
        }
    } 
}






    var file = xlsx.build([{
        name: 'test',
        data: r
    }])
    fs.writeFileSync('ss.xlsx', file, 'binary', { 'flag': 'w' });
    console.log('finished')

