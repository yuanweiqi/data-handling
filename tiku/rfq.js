
var fs = require('fs');
var cheerio = require('cheerio');
var JSON = require('JSON');

var path = '/home/ywq/jindao-update-date/update-date/liuji/'
console.log(path)
    fs.readdir(path, function (err, files) {
        if (err) throw err;
         var result = [];

        files.forEach(function (file) {
            var filePath = path + file;
           // console.log(filePath)
            fs.stat(filePath, function (err, stats) {
                if (err) throw err;

                if (stats.isFile()) {
                    // console.log("%s is file:", file);
                    fs.open(filePath, 'r+', function (err, fd) {
                        if (err) {
                            return console.error(err);
                        }
    
                        var data = fs.readFileSync(filePath, 'utf8');
                        console.log(data) 
                        result.push(data);
                         fs.writeFile('liuji_danxuan.txt',JSON.stringify(result),'utf-8', (err) => {
                            if (err) throw err;
                              //console.log('It\'s saved!');
                             });   
                      });
                   
                }
    
    
            });
          
        });
    
     
    
    
    
    
    });



