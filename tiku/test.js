/**

 */
'use strict';
const log = require('../log');

const fs = require('fs');
//const readbigname = require('./readbigname');
const cheerio = require('cheerio');
const wpApi = require('wpapi');
const moment = require('moment');
const delay = require('./delay');


var message = fs.readFileSync('./answer.txt', 'utf8');
//var message1 = fs.readFileSync('./2.txt', 'utf8');
//const delay = require('./delay');
console.log(message)


var readline = require('readline');
//var fs = require('fs');  
 var os = require('os');  

var fReadName = './test.txt';
//var fWriteName = './2.txt';  
var fRead = fs.createReadStream(fReadName);
//var fWrite = fs.createWriteStream(fWriteName);  






var objReadline = readline.createInterface({
    input: fRead,
    // 这是另一种复制方式，这样on('line')里就不必再调用fWrite.write(line)，当只是纯粹复制文件时推荐使用  
    // 但文件末尾会多算一次index计数   sodino.com  
    //  output: fWrite,   
    //  terminal: true  
});


var index = 1;
let result = new Object();
var en = new Object(); 
var en1 = new Object();
var an = new Object();
var an1 = new Object();
var currentLine = 0;
var r1 = [];
var r2 = [];
var r3 = [];

//let currentLine = 0;
objReadline.on('line', (line) => {
    if (line[0] == 'A') {
        an[index] = line;
    }
    if (line.replace(/^\s+/g, "")[0] == 'A') {
        an[index] = line;
    }
    if (line.replace(/^\s+/g, "")[0 ]== 'C') {
        an1[index] = line.replace(/[\t]/g,'');
    }
    if (line[0] != 'A' &&  line.replace(/^\s+/g, "")[0] != 'C' && line.replace(/^\s+/g, "")[0] != 'A') {
        
        if (line.replace(/^\s+/g, "")[0]== '—' || 
        line.replace(/^\s+/g, "")[0]=='-' ||
        line.replace(/^\s+/g, "")[0]== '－'||
        line.replace(/^\s+/g, "")[0]== '–' ||
        line.replace(/^\s+/g, "")[0]== '一') {
            en[index] = line;
            //  console.log(index)
        } else {
            en1[index] = line;
            //  console.log(index)
        }



    }
    index++;
});


objReadline.on('close', () => {

    for (var i in en) {
        for (var j in en1) {
            var j = j * 1;
            var i = i * 1;
            if (i == j + 1) {
                en1[j] = en1[j] + '\n' + en[i]
            }
        }
    }

    for (var i in an1) {
        for (var j in an) {
            var i = i * 1;
            var j = j * 1;
            if (i == j + 1) {
                an[j] = an[j] + '\n' + an1[i];
              //  an[i] = an[i].replace(/[\t]/g,'')
            }
        }
    }

    for(var i in an){
        var j=0;
        //var a = an[i].search(/A\./)
        // var a = an[i].replace(/．/, '.').search(/A\./)
        // var b = an[i].replace(/．/, '.').search(/B\./)
        // var c = an[i].replace(/．/, '.').search(/C\./)
        // var d = an[i].replace(/．/, '.').search(/D\./)
       var a = an[i].search('A.')
       var b = an[i].search('B.')
       var c = an[i].search('C.')
       var d = an[i].search('D.')
        var option = {
            A : an[i].slice(a,b).replace(/[\t\n]/g,'').replace('A.','').replace('A．','') .trim(),
            B : an[i].slice(b,c).replace(/[\t\n]/g,'').replace('B.','').replace('B．','').trim(),
            C : an[i].slice(c,d).replace(/[\t\n]/g,'').replace('C.','').replace('C．','') .trim(),
            D : an[i].slice(d,an[i].length).replace(/[\t\n]/g,'').replace('D.','').replace('D．','') .trim(),
        }
        r2.push(option)
       // console.log(option)
    }

    for (var i in en1) {
        r1.push(en1[i].replace(/[\t\n]/g,''))
    }
    
    

    for (var i = 0; i < r1.length; i++) {
        if(i<9){
            result[i] = {
                question: r1[i].replace(r1[i][0], '').replace(r1[i][1], '').replace(/^\s+/g,""),
                option: r2[i],
                answer: message[i],
                difficulty: 1
            }
        }
        else{
            result[i] = {
                question: r1[i].replace(r1[i][0], '').replace(r1[i][1], '').replace(r1[i][2],'').replace(/^\s+/g,""),
                option: r2[i],
                answer: message[i],
                difficulty: 1
            }
        }
      
    }
    for(var i in result){
        r3.push(result[i])
    
    }

    fs.appendFile('./12.txt', JSON.stringify(r3),'utf-8', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    // for(var i =0 ;i<r3.length;i++){
    //   // fWrite.write(JSON.stringify(r3[i]) + os.EOL);

    // }

    console.log(r3)
});

