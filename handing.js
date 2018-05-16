var fs = require('fs')
var xlsx = require('node-xlsx')

var excelName = './yuanwenjian/anonymized_data_for_third_party_speech_acts_batch3_feb2_2018(2).xlsx-1519798267854(2).xlsx'
var list = xlsx.parse(excelName);