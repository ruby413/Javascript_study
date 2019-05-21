const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  console.log(data);
});