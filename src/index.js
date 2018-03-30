import app from "./config/Server";
import CONSTANTES from "./config/Constantes";

app.listen(CONSTANTES.PORT, () => console.log("Server running."));