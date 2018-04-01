import roomCollection from "./../collection/Room";
import messageCollection from "./../collection/Message";
import RoomService from "./../service/RoomService";
import MessageService from "./../service/MessageService";

export default (io) => {

    const roomService = new RoomService(roomCollection);
    const messageService = new MessageService(messageCollection);

    io.on("connection", (socket) => {

        roomService.findAll().then(rooms => socket.emit("listRooms", rooms));

        socket.on("addNewRoom", async (newRoom) => {
            try {
                const newRoomReturned = await roomService.create({ name: newRoom });
                socket.broadcast.emit("newRoom", newRoomReturned)
            } catch(e) {
                socket.emit(e.message);
            }
        });
    });
}