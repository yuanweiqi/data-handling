var fs = require('fs')
var xlsx = require('node-xlsx')

var excelName = './number.xlsx'
var list = xlsx.parse(excelName);

var excelName1 = './total0509A.xlsx'
var list1 = xlsx.parse(excelName1)
console.log(list[0].data.length)
var r = [] 

//for(var i = 0;i<list[0].data.length;i++){


    var number = list[0].data[20][0];
    console.log(number)
    for(var j = 1; j<list1[0].data.length;j++){
        var s1 = list1[0].data[j];
        var s2 = list1[0].data[j][0];
        var s3 = list1[0].data[j][1];
        var s4 = list1[0].data[j][2];
        for(var k = 1;k<s1.length;k++){        
             if(s1[k].indexOf(number)!=-1){
                r.push([s2,s3,s1[k]])
    }
console.log(r)
}
    }


    // var file = xlsx.build([{
    //     name: 'test',
    //     data: r
    // }])
    // fs.writeFileSync('./download/20.xlsx', file, 'binary', { 'flag': 'w' });
    // console.log('finished')
 

