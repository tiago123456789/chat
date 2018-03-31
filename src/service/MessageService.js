import MessageDAO from "../dao/MessageDAO";

export default class MessageService {

    constructor(dao) {
        this._dao = new MessageDAO(dao);
    }

    async create(newMessage) {
        return await this._dao.create(newMessage);
    }

    async findBy(filters) {
        if (Object.keys(filters) == 0) {
            throw new Error("Is necessary has to the 1 pairs key and value!");
        }

        return await this._dao.findBy(filters);
    }
}