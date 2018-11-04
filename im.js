const request = require('superagent');
const fs = require('fs')
const Throttle = require('superagent-throttle')

let throttle = new Throttle({
  active: true,
  rate: 1,
  ratePer: 1000,
  concurrent: 1
})

let k =''
let klen
let keywords = []
let sensewords = []
 fs.readFile('./ss.txt', (err, data) => {
    if (err) throw err;
    k = data.toString('utf8',0,data.length)
    keywords = k.split(/[\n\r]+/);
    klen = keywords.length
    for (keyword of keywords) {
      fullword=(`product=MU8F2CH%2FA&msg.0=${encodeURI(keyword)}`)
      reff()
    }
  })
function reff(){
  request
  .get('https://www.apple.com/cn/shop/validate-engraving')
  .use(throttle.plugin())
  .query(fullword)
  .then(res => {
     sensewords.push(`${res.text}\n`)
     let final = sensewords.join('')
     fs.writeFile('message.txt', final, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  })
}

