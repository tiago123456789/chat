/**
 * @description Factory socket.
 */
function socketFactory(url = 'http://localhost:3000') {
    let socket = null;

    return {
        getSocket() {
            if (!socket) {
                socket = io(url);
            }
            return socket;
        }
    }
}
