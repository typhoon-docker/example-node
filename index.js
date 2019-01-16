const http = require("http");
const os = require("os");
const port = 3000;

let hash;
try {
  hash = require("child_process").execSync("git rev-parse HEAD");
} catch (ex) {
  hash = "(git not found)";
}

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(`Hello World!\nRunning on ${os.hostname()}, git hash ${hash}`);
  })
  .listen(port);

console.log(`Server started on port ${port}`);
