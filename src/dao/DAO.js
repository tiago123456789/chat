export default class DAO {

    constructor(dao) {
        this._dao = dao;
    }

    async create(newContent) {
        return await this._dao.create(newContent);
    }

    async findBy(filter) {
        return await this._dao.find(filter);
    }

    async findAll() {
        return await this.findBy({});
    }
}