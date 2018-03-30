const CONSTANTES = {
    dev: {
        PORT: process.env.PORT || 3000
    },
    prd: {
        PORT: process.env.PORT || 3000
    },
    test: {
        PORT: process.env.PORT || 3000
    }
};

export default CONSTANTES[process.env.NODE_ENV || "dev"]