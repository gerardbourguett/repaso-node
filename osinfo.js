const os = require("node:os");

console.log("System Operative");
console.log(os.platform()); //win32
console.log(os.release()); //10.0.22621
console.log("CPU");
console.log(os.cpus()); //CPUs
console.log("Free Memory");
console.log(os.freemem() / 1024 / 1024); //7224950784
console.log("Total Memory");
console.log(os.totalmem() / 1024 / 1024); //16456818688
console.log("Home Directory");
console.log(os.homedir()); //C:\Users\gabc_
console.log("Uptime");
console.log(os.uptime() / 60 / 60 / 24); // 0
console.log("User Info");
console.log(os.userInfo()); //User Info
console.log("Network Interfaces");
console.log(os.networkInterfaces()); //Network Interfaces
console.log("End");
