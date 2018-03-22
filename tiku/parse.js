'use strict'
const fs = require('fs');
const filepath = process.argv[2];
fs.readFile(filepath, (err, data) => {
  let file = data.toString()
  let result = new Array();
  file = JSON.parse(file);
  file.forEach((elems) => {
    //each elems is an array
    elems = JSON.parse(elems)
    elems.forEach((elem) => {
      result.push(elem)
    })
  })
  fs.writeFile(filepath + '_parsed', JSON.stringify(result), (err, rs) => {
    if (err) {
      console.log(err)
    } else {
      console.log('finished')
    }
  })
})