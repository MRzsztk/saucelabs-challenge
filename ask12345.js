const readline = require('readline')
.createInterface({ input: process.stdin, output: process.stdout }); 
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function ask12345() {
let result='';
let count=0;
let succeeded=0;
readline.question('Enter request interval in seconds: ', 
    s => { readline.close(); 
    console.log(s);
  check12345(s)});
  function check12345(s) {
  let interval = setInterval(function() {
  let req = new XMLHttpRequest();
  req.open('get', 'http://localhost:12345/');
  req.send();
  count++;
  req.onload = function() {
      if (req.responseText.toLowerCase().includes('failed')) {
      result='failed';
      } else if (req.responseText.toLowerCase().includes('magnificent')) {
      result='succeeded';
      succeeded++;
      } else {
      result='unidentified response';
      }
      console.log(`Request ${result}. Total requests sent: ${count}, ${succeeded} succeeded (${Math.floor(100*succeeded/count)}%)`)
  };
    }, s*1000);
  }
}


ask12345()


