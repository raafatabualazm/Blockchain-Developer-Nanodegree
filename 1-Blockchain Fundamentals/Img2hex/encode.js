const fs = require('fs'); //Import fs to deal with files
let imgReadBuffer = fs.readFileSync('test-pattern.jpg'); //Read the image
let imgHexEncode = new Buffer(imgReadBuffer).toString('hex'); //Convert it into a hex encoded string
console.log(imgHexEncode); //Print it to console

let imgHexDecode = new Buffer(imgHexEncode, 'hex'); //convert hex to binary
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
