// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
// const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;
// const app_lib = express();
// const getUsers = require("./modules/users");
// // const getBooks = require("./modules/books");

// app_lib.get("/", (req, res) => {
//   const url = new URL(req.url, "http://127.0.0.1");
//   const name = url.searchParams.get("hello");
//   const searchParams = url.searchParams;

//   if (url.searchParams.has("users")) {
//     res.statusMessage = "ok";
//     res.setHeader("Content-Type", "application/json");
//     res.write(getUsers());
//     res.end();
//     return;
//   }
//   if (url.searchParams.has("books")) {
//     res.statusMessage = "ok";
//     res.setHeader("Content-Type", "application/json");
//     res.write(getBooks());
//     res.end();
//     return;
//   }
//   if (name) {
//     res.statusCode = 200;
//     res.statusMessage = "ok";
//     res.setHeader("Content-Type", "text/html; charset=utf8");
//     const name = url.searchParams.get("hello");
//     res.write(`Hello, ${name}`);
//     res.end();
//     return;
//   }
//   if (name === "" || name === " ") {
//     res.statusCode = 400;
//     res.statusMessage = " Bad Request";
//     res.setHeader("Content-Type", "text/html; charset=utf8");
//     const name = url.searchParams.get("hello");
//     res.write(`Enter a name`);
//     res.end();
//     return;
//   }
//   if (![...searchParams].length) {
//     res.statusCode = 200;
//     res, (statusMessage = "ok");
//     res.setHeader("Content-Type", "text/html; charset=utf8");
//     res.write("Hello, world!");
//     res.end();
//   }
//   res.statusCode = 500;
//   res.statusMessage = "Internal Server Error";
//   res.end();
// });

// app_lib.listen(PORT, () => {
//   console.log(`Server is running on ${API_URL}:${PORT}`);
// });


// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRouter = require("./routes/users");
// const loggerOne = require("./middleware/loggerOne");
// dotenv.config();
// mongoose.connect("mongodb://27017:27017/mydb", err => {
//   if (err) throw err;
//   console.log('Connect to MongoDb');
// });
// const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

// const app = express();
// app.use(cors);
// app.use(loggerOne);
// app.use(bodyParser.json())

// app.get("/", (req, res) => {
//   res.statusCode = 200;
//   res, (statusMessage = "ok");
//   res.write("Hello, World!");
//   res.end();
// });

// app.use(userRouter);


// app.listen(PORT, () => {
//    console.log(`Server is running on ${API_URL}:${PORT}`);
// })

const express = require("express");

const app = express();

const dotenv = require("dotenv");
const cors = require("./middleware/cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const Router = require("./routes/route");
const logger = require("./middleware/logger");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_DB = "mongodb://127.0.0.1:27017/library",
} = process.env;

mongoose.connect(`${MONGO_DB}`);

app.get("/", (request, response) => {
  response.statusCode = 200;
  response.send("Hello, World");
});

app.use(bodyParser.json());
app.use(cors);
app.use(logger);
app.use(Router);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});