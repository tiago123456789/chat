export default class AuthController {

    index(request, response) {
        response.render("auth");
    }

    auth(request, response) {
        console.log(request.body);
        response.redirect("/chat");
    }
};