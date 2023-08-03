import {
  platform,
  release,
  cpus,
  freemem,
  totalmem,
  homedir,
  uptime,
  userInfo,
  networkInterfaces,
} from "node:os";

console.log("System Operative");
console.log(platform()); //win32
console.log(release()); //10.0.22621
console.log("CPU");
console.log(cpus()); //CPUs
console.log("Free Memory");
console.log(freemem() / 1024 / 1024); //7224950784
console.log("Total Memory");
console.log(totalmem() / 1024 / 1024); //16456818688
console.log("Home Directory");
console.log(homedir()); //C:\Users\gabc_
console.log("Uptime");
console.log(uptime() / 60 / 60 / 24); // 0
console.log("User Info");
console.log(userInfo()); //User Info
console.log("Network Interfaces");
console.log(networkInterfaces()); //Network Interfaces
console.log("End");
