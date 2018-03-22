var fs = require('fs')

var readline = require('readline');
var fReadName = './test.txt';
var fRead = fs.createReadStream(fReadName);

var objReadline = readline.createInterface({
    input: fRead,
});

var result = new Object();
objReadline.on('line', (line) => {
  
    var xlsx = require('node-xlsx')
    
    var excelName = './yuanwenjian/anonymized_data_for_third_party_speech_acts_batch3_feb2_2018(2).xlsx-1519798267854(2).xlsx'
    var list = xlsx.parse( excelName);
    //读出后是数组，包含每个sheet
  
    for (var i in list[0].data) {
        var l = list[0].data[i][4]

        var regex2 = new RegExp(line)
        var a =  regex2.exec(l)
        if(a != null){
            console.log(a)
        }
          r.push(a)
 
      

        // if( l.indexOf(line.input) != -1) {
      
        //     result[i] = {
        //         'index': list[0].data[i][0],
        //         'text' : l,
        //         'key' : line 
        //     }
     
        //      console.log(result)
        // }
      
    }   

})

var r = []
objReadline.on('close', () => {
    for(var i in result) {
       r.push(result[i])
    }
    fs.writeFile('key_anonymized_data_for_third_party_speech_acts_batch3_feb2_2018(2).xlsx-1519798267854(2).txt', JSON.stringify(r), 'utf-8', (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
     
        });

 