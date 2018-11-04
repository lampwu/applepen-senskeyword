const fs = require('fs')

let res = []
let ccs = []
let end = []

fs.readFile('./message.txt', (err, data) => {
    if (err) throw err;
    let  k = data.toString('utf8',0,data.length)
    res = k.split(/[\n\r]+/);
    fs.readFile('./ss.txt', (err, data) => {
        if (err) throw err;
        let  j = data.toString('utf8',0,data.length)
        ccs = j.split(/[\n\r]+/);
        for (i = 0;i<ccs.length;i++) {
            if (res[i]=='{"head":{"status":"200","data":{}},"body":{"content":{"hasErrors":true,"errors":{"0":"不支持英文小写字母。"},"partNumber":"MU8F2CH/A"}}}') {
                end.push(ccs[i])
                console.log(end)
            }
        }
      });
  });

