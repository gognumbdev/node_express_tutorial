const os = require('os') // os is built-in for this case.

// info about current user
const user =  os.userInfo();

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)