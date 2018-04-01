class ListenerEvent {

    static watching(nameEvent, callback) {
        socketFactory().getSocket().on(nameEvent, callback);
    }
}