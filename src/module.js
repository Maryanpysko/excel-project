console.log('Module.js')
async function start() {
   return await Promise.resolve('working')
}
start().then(console.log)