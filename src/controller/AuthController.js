export default class AuthController {

    index(request, response) {
        response.render("auth");
    }

    auth(request, response) {
        request.session.user = {
           name: request.body.name
        };
        response.redirect("/chat");
    }

    logout(request, response) {
        request.session.destroy();
        response.redirect("/auth");
    }
};