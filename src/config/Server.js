import express from "express";
import bodyParser from "body-parser";
import routes from "./../routes/Index";
import "./Database";


const app = express();

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

export default app;
