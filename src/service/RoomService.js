import RoomDAO from "../dao/RoomDAO";

export default class RoomService {

    constructor(dao) {
        this._dao = new RoomDAO(dao);
    }

    async create(newRoom) {
        return await this._dao.create(newRoom);
    }

    async findAll() {
        return await this._dao.findAll();
    }
}