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

        socket.on("joinRoom", async (idRoom) => {
            try {
                socket.join(idRoom);
                const messages = await messageService.findBy({ room: idRoom });
                socket.to(idRoom).emit("listMessages", messages);
            } catch(e) {
                socket.emit(e.message);
            }
        })
    });
}