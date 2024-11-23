const fs = require("fs");
const a = 100;

setImmediate(() => console.log("SEt immediate"));

Promise.resolve("Promise").then(console.log);

process.nextTick(() => console.log("next tick process"));

fs.readFile("./file.txt", () => {
    console.log("file read completed")
})

setTimeout(() => {
    process.nextTick(() => console.log("second tick called"));
    console.log("SetTImeout called")
}, 0);

console.log("last line of code");