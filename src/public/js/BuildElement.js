class BuildElement {

    static buildRoom(room) {
        $("#mySidenav").append(ElementsHtml.getRoom(room));
    }

    static buildMessage(message) {
        if (message.typeMsg === "msg") {
            $("#messages-chat").append(ElementsHtml.getMessage(message));
        } else {
            $("#messages-chat").append(ElementsHtml.getMessageAudio(message));
        }
    }

    static buildListRoom(rooms) {
        rooms.forEach(room => BuildElement.buildRoom(room));
    }

    static buildListMessage(messages) {
        messages.forEach(message => BuildElement.buildMessage(  message));
    }

    static buildAlertMessage(configure) {
        $("#area_message_notifications")
            .append(ElementsHtml.getAlertMessage(configure));
    }
}