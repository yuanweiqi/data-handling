/**

 */
'use strict';
const log = require('../log');
const wp = require('./8_wp');
const config = require('./7_config');
const fs = require('fs');
//const readbigname = require('./readbigname');
const cheerio = require('cheerio');
const wpApi = require('wpapi');
const moment = require('moment');
const delay = require('./delay');


var message = fs.readFileSync('./answer.txt', 'utf8');
//const delay = require('./delay');
console.log(message)


var readline = require('readline');
//var fs = require('fs');  
// var os = require('os');  

var fReadName = './test.txt';
//var fWriteName = './1.readline.log';  
var fRead = fs.createReadStream(fReadName);
// var fWrite = fs.createWriteStream(fWriteName);  


var objReadline = readline.createInterface({
    input: fRead,
 
});


var index = 1;
let result = new Object();
var en = [];
var r = [];

let currentLine = 0;
objReadline.on('line', (line) => {
   
    // if(line[0] == 'A'){
    //     if(currentLine)
    //     result[currentLine]['option'] = line;
    // }
  if(line[0] !='A' && line[0] != 'C'){ 
    currentLine = line[0] + line[1];
    for (var i = 1; i <= message.length; i++) {
        if (line[1] == (i - 10) % 10) {
            result[line[0] + line[1]] = {
                question: line.replace(line[0] + line[1], '').replace(line[2], ''),
                answer: message[i - 1],
                difficulty: '1'
            }

        }

        
        if (line[0] == i && line[1] != '0' && line[1] != '1'
            && line[1] != '2' && line[i] != '3' && line[i] != '4' && line[i] != '5') {
            //  console.log(i, message[i - 1])
            //  var l = line.length;
            result[line[0] + line[1]] = {
                question: line.replace(line[0], '').replace(line[1], ''),
                answer: message[i - 1],
                difficulty: '1'
            }

        }

    }
}

 // }

// if (line[0] == '1' || line[0] == '2' || line[0] == '3' ||
//     line[0] == '4' || line[0] == '5' || line[0] == '6' ||
//     line[0] == '7' || line[0] == '8' || line[0] == '9' ||
//     line[1] == '1' || line[1] == '2' || line[1] == '3' ||
//     line[1] == '4' || line[1] == '5' || line[1] == '0') 

    // } else {
    //     //q
    //     if (line[0] !== ':' && line[0] !== 'C')
    //         result[currentLine].question += `\n${line}`
    //     //o
    //     // console.log(currentLine, line)
    // }

    // if(line[1] == '.' && line[2] == 'A' ||
    //     line[2] == 'B' || line[2] == 'C' ||
    //     line[2] == 'D') {
    //       //  console.log(line[0]+line[1]+line[2])
    // }
    //     //    console.log(index, line);  
    //     // index++;

});


objReadline.on('close', () => {
    console.log('readline close...');
    //  console.log(en.length);
    // for (var i in result) {
    //     r.push(result[i])
    // }
    console.log(result)
});



