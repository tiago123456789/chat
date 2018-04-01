class BuildElement {

    static buildRoom(room) {
        $("#mySidenav").append(ElementsHtml.getRoom(room));
    }

    static buildMessage(message) {
        $("#messages-chat").append(ElementsHtml.getMessage(message));
    }

    static buildListRoom(rooms) {
        rooms.forEach(room => BuildElement.buildRoom(room));
    }

    static buildListMessage(messages) {
        messages.forEach(message => BuildElement.buildMessage(  message));
    }
}