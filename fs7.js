const fs = require('fs')

let res = []
let ccs = []
let end = []
const q = fs.readFileSync('./message.txt')
let  k = q.toString('utf8',0,q.length)
res = k.split(/[\n\r]+/);
const p = fs.readFileSync('./ss.txt')
let  j = p.toString('utf8',0,p.length)
ccs = j.split(/[\n\r]+/);
for (let i = 0;i<res.length;i++) {
    if(res[i]==='{"head":{"status":"200","data":{}},"body":{"content":{"hasErrors":true,"errors":{"0":"不得含有不适当的词句。"},"partNumber":"MU8F2CH/A"}}}') {
        end.push(ccs[i])
    }
  }
fs.writeFile('sensitivewords.txt', end, (err) => {
    if (err) throw err
    console.log('success')
})