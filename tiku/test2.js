
'use strict';

const fs = require('fs');

var readline = require('readline');
var fReadName = './test.txt';
var fRead = fs.createReadStream(fReadName);


var objReadline = readline.createInterface({
    input: fRead,
    // 这是另一种复制方式，这样on('line')里就不必再调用fWrite.write(line)，当只是纯粹复制文件时推荐使用  
    // 但文件末尾会多算一次index计数   sodino.com  
    //  output: fWrite,   
    //  terminal: true  
});

var index = 0;
let currentLine = 0;
var result = new Object();
var r1 = [];
objReadline.on('line', (line) => {

    index++;

        var a = line.search(' ')

        result[index] = {
            question: line.slice(0,a),
            option: '',
            answer: line.slice(a, line.length),
            difficulty: 3
        }
       // console.log(result)
});

objReadline.on('close', () => {

    for (var i in result) {
        r1.push(result[i])
    }
    fs.writeFile('liuji.txt', JSON.stringify(r1), 'utf-8', (err) => {
        if (err) throw err;
        //console.log('It\'s saved!');
    });
});
