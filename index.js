const fs = require ("fs");

fs.writeFile("./binaryFile.bn", Buffer.from([0x48, 0x65, 0x6C, 0x6C, 0x6F, 0x20, 0x57, 0x6F, 0x72, 0x6C, 0x64]), (err) => {
    if (err) throw err;
    console.log("Binary file has been saved.");

});