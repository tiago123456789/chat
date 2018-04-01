import express from "express";
import bodyParser from "body-parser";
import socketIO from "socket.io";
import httpModule from "http";
import session from "express-session";
import sharedSession from "express-socket.io-session";

import routes from "./../routes/Index";
import socketConfigure from "./Socket";
import AuthMiddleware from "./../middleware/AuthMiddleware";
import "./Database";

const app = express();
const http = httpModule.createServer(app);
const io = socketIO(http);

const expressSession = session({
    secret: 'socketio',
    cookie: { maxAge: 10 * 60 * 1000 }
});

/**
 * @description Defined session in application.
 */
app.use(expressSession);

/**
 * @description Configure than share session with socket.
 */
io.use(sharedSession(expressSession, { autoSave: true }));

/**
 * @description Verify user authenticated per access socket.
 */
io.use(AuthMiddleware.socket);

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
