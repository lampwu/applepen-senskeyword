const fs = require('fs');
const util = require('util');
const request = require('superagent');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

let k = ''
let klen
let keywords = []
let sensewords = []
let final = ''
async function getStuff() {
  return await readFile('ss.txt');
}

 function axx()  {
     request
    .get('https://www.apple.com/cn/shop/validate-engraving')
    .query(fullword)
    .then( res => {
       sensewords.push(`${res.text}\n`)
      })
      .catch(err => {
        if (err) throw err
    })
  }
// Can't use `await` outside of an async function so you need to chain
// with then()
getStuff().then( data => {
    k = data.toString('utf8',0,data.length)
    keywords = k.split(/[\n\r]+/);
    klen = keywords.length
    for (keyword of keywords) {
      fullword=(`product=MU8F2CH%2FA&msg.0=${encodeURI(keyword)}`)
      axx()
    }
    final = sensewords.join('')
     fs.writeFile('message.txt', final, (err) => {
        console.log(final)
        if (err) throw err;
        console.log('write success')
          })
}).catch(err => {
    if (err) throw err
})