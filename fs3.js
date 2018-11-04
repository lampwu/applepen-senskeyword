const fs = require('fs')

let k = []
const registerPartials = async () => {
    const files = await fs.readFile('./ss.txt', 'utf8', (err, data) => {
        if (err) throw err
        console.log(data)
        k.push(data)
    }); // Read partials
    console.log(k)
} 
registerPartials();

