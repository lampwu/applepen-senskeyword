function delay() {
    return new Promise(resolve => setTimeout(resolve,300))
}

async function delayedlog(item) {
    await delay()
    console.log(item)
}

async function processArray(array) {
    const promises = array.map(delayedlog)
    await Promise.all(promises)
    console.log('Done')
}

processArray([1,2,3])