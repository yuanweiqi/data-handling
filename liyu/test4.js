var fs = require('fs')
var xlsx = require('node-xlsx')

var readline = require('readline');
var fReadName = './test.txt';
var fRead = fs.createReadStream(fReadName);

var objReadline = readline.createInterface({
    input: fRead,
});

var result = new Object();
var excelName = './yuanwenjian/anonymized_data_for_third_party_speech_acts_batch3_feb2_2018(2).xlsx-1519798267854(2).xlsx'
var list = xlsx.parse(excelName);
objReadline.on('line', (line) => {

    //读出后是数组，包含每个sheet
   
    for (var i in list[0].data) {
        var l = list[0].data[i][4]
      // console.log(s10)
        var regex2 = new RegExp(line)
        var a = regex2.exec(l)
        if (a != null) {
            var s1 = a[0]
            var s2 = a['index']
            var s3 = a['input']
            var s4 = list[0].data[i][5]
            var s5 = list[0].data[i][6]
            var s6 = list[0].data[i][7]
            var s7 = list[0].data[i][8]
            var s8 = list[0].data[i][9]
            var s9 = list[0].data[i][10]
            var s10 = list[0].data[i][11]
            var s11 = list[0].data[i][12]

            r.push([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11])
        }
    //    console.log(r.join(''))
    }

})


var r = []
objReadline.on('close', () => {

    var file = xlsx.build([{
        name:'test',
        data: r
    }])
    fs.writeFileSync('key_anonymized_data_for_third_party_speech_acts_batch3_feb2_2018(2).xlsx-1519798267854(2).xlsx',file,'binary',{'flag':'w'}); 
    console.log('finished')
});

