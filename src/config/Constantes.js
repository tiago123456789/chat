const CONSTANTES = {
    dev: {
        URL_DB: "mongodb://172.17.0.2:27017/chat",
        PORT: process.env.PORT || 3000
    },
    prd: {
        PORT: process.env.PORT || 3000
    },
    test: {
        URL_DB: "mongodb://172.17.0.2:27017/chat-test",
        PORT: process.env.PORT || 3000
    }
};

export default CONSTANTES[process.env.NODE_ENV || "dev"]