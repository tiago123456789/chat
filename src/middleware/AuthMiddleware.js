export default class AuthMiddleware {

    static socket(socket, next) {
        const user = socket.handshake.session.user;
        if(!user || !user.name){
            next(new Error("Authentication failed!"))
        }else{
            next()
        }
    }

    static http(request, response, next) {
        const user = request.session.user;
        if (!user || !user.name) {
            response.redirect("/auth");
        } else {
            next();
        }
    }
}