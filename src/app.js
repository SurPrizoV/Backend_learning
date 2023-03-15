const http = require("http");
const url = require("url");
const getUsers = require("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;
const server = http.createServer((request, response) => {
  let queryData = url.parse(request.url, true).query;

   if (request.url === "/?users") {
     response.statusCode = 200;
     response.setHeader("Content-Type", "application/json");
     response.end(getUsers());
     return;
   }

  if (queryData.name) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello " + queryData.name + "\n");
  } else if (queryData.name === "") {
    response.statusCode = 400;
    response.setHeader("Content-Type", "text/plain");
    response.end("Enter a name");
  } else if (queryData) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello, World!");
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
