class EmitEvent {

    static emit(nameEvent, value) {
        socketFactory().getSocket().emit(nameEvent, value);
    }

}
