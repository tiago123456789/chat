import express from "express";
import bodyParser from "body-parser";
import socketIO from "socket.io";
import httpModule from "http";

import routes from "./../routes/Index";
import socketConfigure from "./Socket";
import "./Database";

const app = express();
const http = httpModule.createServer(app);
const io = socketIO(http);

/**
 * @description Defined configuration socket
 */
socketConfigure(io);
/**
 * @description Defined template engine and dir views.
 */
app.set("views", "./src/views");
app.set("view engine", "ejs");

/**
 * @description Defined dir files statics.
 */
app.use(express.static("./src/public"));

/**
 * @description Defined middleware than parse datas to json.
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description Defined routes application.
 */
routes(app);

export default http;
