import AuthController from "./../controller/AuthController";
import ChatController from "./../controller/ChatController";

export default (app) => {

    const authController = new AuthController();
    const chatController  = new ChatController();


    /**
     * @description Render page authentication.
     */
    app.get("/auth", authController.index);

    /**
     * @description Route responsable by authentication user.
     */
    app.post("/auth", authController.auth);

    /**
     * @description Render page chat.
     */
    app.get("/chat", chatController.index);

    /**
     * @description Route display when not found route.
     */
    app.use((req, res, next) => {
        res.render('404');
    });
}