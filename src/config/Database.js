import mongoose from "mongoose";
import CONSTANTES from "./Constantes";

// Defined lib promise used to the mongoose.
mongoose.Promise = Promise;

mongoose.connect(CONSTANTES.URL_DB);