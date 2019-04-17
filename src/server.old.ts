// import app from './app';
import * as express from "express";
import * as http from "http";
import * as logger from "morgan";
import * as path from "path";
const app = express();
import { RequestHandler, RequestHandlerParams } from "express-serve-static-core";
import * as fs from "fs";
const PORT = process.env.PORT || 3000;

// fs.readFile(__dirname + "/../public/myfile.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("error reading file", __dirname);
//         return;
//     }
//     console.log(data);
// })
// console.log("hello ne");

// app.use(function(req: any, res: any, next) {
//     console.log("In comes a " + req.method + " to " + req.url);
//     next();
// });

// app.use(function(req, res, next) {
//     let min = (new Date().getMinutes());
//     if ((min % 2) === 0) {
//         next();
//     } else {
//         res.statusCode = 403;
//         res.end("Not authorized");
//     }
// });

// app.use(function(req, res) {
//     // res.writeHead(200,{"Content-Type": "text/plain"});
//     // res.status(200).header(Object.assign(res.getHeader, {"Content-type": "text/plain"}));
//     res.status(200).header("Content-Type", "text/plain");
//     console.log(res.getHeaders());
//     res.end("Authorized");
// });

app.use(logger("short"));

const publicPath = path.resolve(__dirname, "..", "public");
console.log(publicPath);
// app.use(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Looks like you didn't find a static file.");
// });

app.get("/", (req, res) => {
    res.end("Welcome to my homepage!");
});

app.get("/about", function (request, response) {
    response.end("Welcome to the about page!");
});

app.get("/weather", (request, response) => {
    response.end("The current weather is NICE.");
});

app.get("/helo/:who", (req, res) => {
    res.redirect("/");
    res.end("Hello " + req.params.who);
})

app.use((req, res) => {
    res.status(404).end("404!")
})

const server = http.createServer(app);
server.listen(3000, () => {
    console.log("Server is served as: http://localhost:" + "3000");
});

// app.listen(PORT, () => {
//     console.log(`App is listened on ${PORT}`);
// });
