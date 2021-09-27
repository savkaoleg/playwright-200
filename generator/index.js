const fs = require('fs');
const path = require('path');

const count = 200;

const testFile = path.join(__dirname, 'test.js');
console.log('Test File:', testFile);
const fileContent = fs.readFileSync(testFile);

const destinationFolder = path.resolve(__dirname, '../tests/');
console.log('Destination Folder:', destinationFolder);

for (var i = 1; i <= count; i++) {
    fs.writeFileSync(path.join(destinationFolder,i+'.test.js'), fileContent);
}