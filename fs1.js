const fs = require('fs')
fs.readFile('./ss.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
    let  k = data.toString('utf8',0,data.length)
    let res = k.split(/[\n\r]+/);
    console.log(res[0])  
  });