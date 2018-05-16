var fs = require("fs")

var message = fs.readFileSync('./siji_danxuan.txt_parsed', 'utf8');

var message1 =  JSON.parse(message)
r = []
for(var i in message1){

    r.push(message1[i]['question'])
 //   console.log( message1[i]['question'])
if ( message1[i]['question'].search('As we know') != -1)
       {
        console.log(i)
        console.log(message1[i]['question'])
    }
    // if(i == 54) {
    //     console.log(message1[i])
    // }
}
// for(var i = 300; i< 350; i++){
//     console.log(i,r[i])
// }