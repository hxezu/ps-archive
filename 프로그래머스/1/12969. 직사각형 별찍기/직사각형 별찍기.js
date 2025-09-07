const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");
const n = Number(input[0]); 
const m = Number(input[1]);


const line = "*".repeat(n)
for(let i=0; i<m; i++){
    console.log(line)
}